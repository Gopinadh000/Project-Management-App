<migration-script id="000_create_migration_history">
CREATE TABLE IF NOT EXISTS migration_history (
    id INT AUTO_INCREMENT PRIMARY KEY,
    migration_id VARCHAR(255) NOT NULL UNIQUE,
    executed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
</migration-script>


<migration-script id="001_create_companies_table">
CREATE TABLE IF NOT EXISTS companies(
  company_id VARCHAR(30) PRIMARY KEY, 
  company_name VARCHAR(100), 
  company_email VARCHAR(255), 
  company_headquarters VARCHAR(100),
  contact_no VARCHAR(12), 
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
</migration-script>

<migration-script id="002_app_roles_table">
CREATE TABLE IF NOT EXISTS app_roles(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
</migration-script>

<migration-script id="003_priorities_table">
CREATE TABLE IF NOT EXISTS priorities(
    id INT AUTO_INCREMENT PRIMARY KEY,  
    name VARCHAR(100) NOT NULL,
    description VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
</migration-script>



<migration-script id="004_statuses_table">
CREATE TABLE IF NOT EXISTS statuses(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
</migration-script>


<migration-script id="005_create_users_table">
CREATE TABLE IF NOT EXISTS users (
  id VARCHAR(30) PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100) UNIQUE,
  role ENUM('SUPER_ADMIN', 'ADMIN', 'USER'),
  company_id VARCHAR(30),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (company_id) REFERENCES companies(company_id)
);
</migration-script>


<migration-script id="006_users_password_table">
CREATE TABLE IF NOT EXISTS users_passwords(
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id VARCHAR(30),
  password VARCHAR(255),
  hash_password text,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
);
</migration-script>

<migration-script id="007_users_details_info_table">
CREATE TABLE IF NOT EXISTS users_details_info(
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id VARCHAR(30),
  first_name VARCHAR(100),
  last_name VARCHAR(100),
  phone_number VARCHAR(12),
  address VARCHAR(255),
  city VARCHAR(100),
  state VARCHAR(100),
  zip_code VARCHAR(10),
  country VARCHAR(100),
  designation VARCHAR(100),
  profile_picture LONGBLOB,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
);
</migration-script>

<migration-script id="008_users_drop_query_fk">
ALTER TABLE users_passwords
DROP FOREIGN KEY users_passwords_ibfk_1;
</migration-script>


<migration-script id="009_users__query">
ALTER TABLE users_passwords
ADD CONSTRAINT users_passwords_ibfk_1
FOREIGN KEY (user_id) REFERENCES users(id)
ON DELETE CASCADE;
</migration-script>


<migration-script id="010_create_projects_table">
CREATE TABLE IF NOT EXISTS projects (
  id VARCHAR(30) PRIMARY KEY,
  project_name VARCHAR(255) NOT NULL,
  description TEXT,
  project_owner VARCHAR(30),
  created_by VARCHAR(30),
  company_id VARCHAR(30),
  status ENUM('ACTIVE', 'INACTIVE', 'COMPLETED', 'ON_HOLD') DEFAULT 'ACTIVE',
  priority ENUM('LOW', 'MEDIUM', 'HIGH', 'URGENT') DEFAULT 'MEDIUM',
  start_date DATE,
  end_date DATE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (project_owner) REFERENCES users(id),
  FOREIGN KEY (created_by) REFERENCES users(id),
  FOREIGN KEY (company_id) REFERENCES companies(company_id)
);
</migration-script>


<migration-script id="011_update_users_status_column">
ALTER TABLE users
ADD COLUMN status TINYINT(1)  DEFAULT 0
AFTER company_id;
</migration-script>

<migration-script id="012_create_app_designations_table">
CREATE TABLE IF NOT EXISTS  app_designations(
  id INT AUTO_INCREMENT PRIMARY KEY, 
  desgination_name VARCHAR(225), 
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP, 
  created_by VARCHAR(50)
  );
</migration-script>



















