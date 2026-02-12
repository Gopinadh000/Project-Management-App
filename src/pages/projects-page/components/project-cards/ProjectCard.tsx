import React from 'react';
import { Box, Typography, Avatar, Chip } from '@mui/material';
import { useTheme } from '../../../../hooks/useTheme';

const ProjectCard = ({projectData}:any) => {
    const {
      project_name,
      projectOwner,
      proejctownerimg,
      projectstatuscolor,
      project_progress,
      project_status,
      status,
    } = projectData;

    console.log("projectData", projectData);

    const { isDark } = useTheme();

    return (
      <Box
        sx={{
          width: { xs: "100%", sm: "300px", md: "350px" },
          minHeight: "200px",
          padding: 3,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          cursor: "pointer",
          backgroundColor: "var(--app-bg-primary)",
          border: "1px solid",
          borderColor: "var(--app-secondary-200)",
          borderRadius: "12px",
          boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
          transition: "all 0.2s",
          "&:hover": {
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
            transform: "translateY(1px)",
            borderColor: "var(--app-primary-300)",
          },
        }}
      >
        {/* Project Title */}
        <Box
          sx={{
            borderBottom: "1px solid",
            borderColor: "var(--app-secondary-200)",
            paddingBottom: 2,
            mb: 2,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontSize: "1.125rem",
              fontWeight: 600,
              color: "var(--app-primary-500)",
              cursor: "pointer",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              "&:hover": {
                color: "var(--app-primary-600)",
              },
            }}
          >
            {project_name}
          </Typography>
        </Box>

        {/* Project Owner */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            mb: 2,
          }}
        >
          <Avatar
            src={proejctownerimg}
            alt={projectOwner}
            sx={{
              width: 48,
              height: 48,
              border: "2px solid",
              borderColor: "var(--app-secondary-200)",
            }}
          />
          <Typography
            variant="body1"
            sx={{
              fontSize: "1rem",
              fontWeight: 500,
              color: "var(--app-text-primary)",
            }}
          >
            {projectOwner || "John Doe"}
          </Typography>
        </Box>

        {/* Status and Progress */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: "auto",
          }}
        >
          <Chip
            label={project_status || status}
            size="small"
            sx={{
              backgroundColor: projectstatuscolor,
              color: "white",
              fontWeight: 500,
              fontSize: "0.75rem",
            }}
          />
          <Box
            sx={{
              minWidth: 50,
              height: 50,
              borderRadius: "50%",
              border: "2px solid",
              borderColor: "var(--app-secondary-200)",
              backgroundColor: "var(--app-primary-50)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "8px",
            }}
          >
            <Typography
              variant="body2"
              sx={{
                fontSize: "12px",
                fontWeight: 600,
                color: "var(--app-primary-500)",
                textAlign: "center",
              }}
            >
              {project_progress}
            </Typography>
          </Box>
        </Box>
      </Box>
    );
}

export default ProjectCard
