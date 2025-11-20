import { ReS, ReE } from "../utils/utils.js";
import { db } from "../config/db-config.js";
import bcrypt from "bcryptjs";
import { generateJWT } from "../services/jwt/jwt.service.js";

export const registerUser = async (req, res) => {
    const { firstName, lastName, email, password, companyId, companyName } = req.body;

    if (!firstName || !lastName || !email || !password || !companyId || !companyName) {
        return ReE(res, { message: "All fields are required" });
    }

    try {
        // 1. Check if company already exists
        const [companies] = await db.query("SELECT * FROM companies WHERE company_id = ?", [companyId]);

        if (companies.length > 0) {
            return ReE(res, { message: "Company ID already exists. Please use a different company ID." });
        }

        // 2. Check if user already exists globally (email should be unique across all companies)
        const [existingUsers] = await db.query("SELECT * FROM users WHERE email = ?", [email]);
        if (existingUsers.length > 0) {
            return ReE(res, { message: "User with this email already exists" });
        }

        // 3. Create the company first
        await db.query(
            "INSERT INTO companies (company_id, company_name) VALUES (?, ?)",
            [companyId, companyName]
        );

        // 4. Determine role and user ID
        let role = "SUPER_ADMIN"; // First user is always SUPER-ADMIN
        let newUserId = `${companyId}-0001`;

        // 5. Create user
        let fullname = `${firstName} ${lastName}`;
        await db.query(
            "INSERT INTO users(id, name, email, role, company_id) VALUES (?, ?, ?, ?, ?)",
            [newUserId, fullname, email, role, companyId]
        );


        // 6. Hash and store password
        const passwordHash = await bcrypt.hash(password, 10);
        await db.query(
            "INSERT INTO users_passwords (user_id, password, hash_password) VALUES (?, ?, ?)",
            [newUserId, password, passwordHash]
        );

        //store basic user info 
        const [savedUserData] = await db.query("INSERT INTO users_details_info(user_id , first_name , last_name)  VALUES (? , ? , ?)", [newUserId ,  firstName , lastName ])

        // Generate JWT token for the new user
        const userData = {
            id: newUserId,
            name: fullname,
            email: email,
            role: role,
            company_id: companyId
        };
        const token = generateJWT(userData);

        return ReS(res, { 
            data: { 
                user: { 
                    id: newUserId, 
                    name: fullname, 
                    email: email, 
                    role: role, 
                    companyId: companyId 
                },
                token: token
            }, 
            message: "User registered successfully" 
        });
    } catch (err) {
        return ReE(res, { message: "Registeration failed", error: err.message , err : err });
    }
};

export const loginUser =  async (req, res) => {
    const { email, password } = req.body;

        if (!email || !password) {
            return ReE(res, { message: "Email and password are required" });
        }
        // 1. Find user by email
        const [users] = await db.query("SELECT * FROM users WHERE email = ?", [email]);

        if (users.length === 0) {
            return ReE(res, { message: "Invalid email or password" });
        }
        const user = users[0];

        // 2. Get password hash from users_passwords
        const [pwRows] = await db.query("SELECT hash_password FROM users_passwords WHERE user_id = ?", [user.id]);
        if (pwRows.length === 0) {
            return ReE(res, { message: "Invalid email or password" });
        }
        const passwordHash = pwRows[0].hash_password;

        // 3. Compare password
        const isMatch = await bcrypt.compare(password, passwordHash);
        if (!isMatch) {
            return ReE(res, { message: "Invalid email or password" });
        }

        // 4. Generate JWT token
        const token = generateJWT(user);

        // 5. Success response
        return ReS(res, { 
            data: { 
                user: { 
                    id: user.id, 
                    email: user.email, 
                    name: user.name, 
                    role: user.role,
                    companyId: user.company_id 
                },
                token: token 
            }, 
            message: "Login successful" 
        });
    }
