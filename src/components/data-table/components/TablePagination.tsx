import { Box, IconButton, Typography } from '@mui/material';
import { ChevronLeft, ChevronRight, FirstPage, LastPage } from '@mui/icons-material';

interface TablePaginationProps {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
}

/**
 * Custom Table Pagination Component
 * Displays page numbers on the left and total count on the right
 */
export const TablePagination = ({
  currentPage,
  totalPages,
  totalItems,
  itemsPerPage,
  onPageChange,
}: TablePaginationProps) => {
  const startItem = currentPage * itemsPerPage + 1;
  const endItem = Math.min((currentPage + 1) * itemsPerPage, totalItems);

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxPagesToShow = 3;

    if (totalPages <= maxPagesToShow) {
      // Show all pages if total is less than max
      for (let i = 0; i < totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Show pages with ellipsis
      if (currentPage <= 1) {
        // Show first 4 pages
        for (let i = 0; i < maxPagesToShow; i++) {
          pages.push(i);
        }
        if (totalPages > maxPagesToShow) {
          pages.push('...');
          pages.push(totalPages - 1);
        }
      } else if (currentPage >= totalPages - 2) {
        // Show last 4 pages
        pages.push(0);
        pages.push('...');
        for (let i = totalPages - maxPagesToShow; i < totalPages; i++) {
          pages.push(i);
        }
      } else {
        // Show pages around current page
        pages.push(0);
        pages.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages - 1);
      }
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <Box
      className="bg-white!"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "12px 16px",
        backgroundColor: "#FFF!",
        borderTop: "1px solid rgba(0, 0, 0, 0.12)",
      }}
    >
      {/* Left side - Pagination controls */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        {/* First Page Button */}
        <IconButton
          size="small"
          onClick={() => onPageChange(0)}
          disabled={currentPage === 0}
          sx={{
            border: "1px solid rgba(0, 0, 0, 0.12)",
            borderRadius: "4px",
            padding: "4px",
            "&:hover": {
              backgroundColor: "rgba(0, 0, 0, 0.04)",
            },
            "&.Mui-disabled": {
              opacity: 0.5,
            },
          }}
        >
          <FirstPage fontSize="small" />
        </IconButton>

        {/* Previous Page Button */}
        <IconButton
          size="small"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 0}
          sx={{
            border: "1px solid rgba(0, 0, 0, 0.12)",
            borderRadius: "4px",
            padding: "4px",
            "&:hover": {
              backgroundColor: "rgba(0, 0, 0, 0.04)",
            },
            "&.Mui-disabled": {
              opacity: 0.5,
            },
          }}
        >
          <ChevronLeft fontSize="small" />
        </IconButton>

        {pageNumbers.map((page, index) => {
          if (page === "...") {
            return (
              <Typography
                key={`ellipsis-${index}`}
                variant="body2"
                sx={{ px: 1, color: "text.secondary" }}
              >
                ...
              </Typography>
            );
          }

          const pageNum = page as number;
          const isActive = pageNum === currentPage;

          return (
            <Box
              key={pageNum}
              onClick={() => onPageChange(pageNum)}
              sx={{
                minWidth: "32px",
                height: "32px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                borderRadius: "4px",
                border: "1px solid",
                borderColor: isActive ? "primary.main" : "rgba(0, 0, 0, 0.12)",
                backgroundColor: isActive ? "primary.main" : "transparent",
                color: isActive ? "#fff" : "text.primary",
                fontSize: "14px",
                fontWeight: isActive ? 600 : 400,
                transition: "all 0.2s",
                "&:hover": {
                  backgroundColor: isActive
                    ? "primary.dark"
                    : "rgba(0, 0, 0, 0.04)",
                  borderColor: isActive
                    ? "primary.dark"
                    : "rgba(0, 0, 0, 0.23)",
                },
              }}
            >
              {pageNum + 1}
            </Box>
          );
        })}

        {/* Next Page Button */}
        <IconButton
          size="small"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage >= totalPages - 1}
          sx={{
            border: "1px solid rgba(0, 0, 0, 0.12)",
            borderRadius: "4px",
            padding: "4px",
            "&:hover": {
              backgroundColor: "rgba(0, 0, 0, 0.04)",
            },
            "&.Mui-disabled": {
              opacity: 0.5,
            },
          }}
        >
          <ChevronRight fontSize="small" />
        </IconButton>

        {/* Last Page Button */}
        <IconButton
          size="small"
          onClick={() => onPageChange(totalPages - 1)}
          disabled={currentPage >= totalPages - 1}
          sx={{
            border: "1px solid rgba(0, 0, 0, 0.12)",
            borderRadius: "4px",
            padding: "4px",
            "&:hover": {
              backgroundColor: "rgba(0, 0, 0, 0.04)",
            },
            "&.Mui-disabled": {
              opacity: 0.5,
            },
          }}
        >
          <LastPage fontSize="small" />
        </IconButton>
      </Box>

      {/* Right side - Total count */}
      <Typography
        variant="body2"
        sx={{ color: "text.secondary", fontSize: "14px" }}
      >
        Showing {startItem}-{endItem} of {totalItems} items
      </Typography>
    </Box>
  );
};

export default TablePagination;

