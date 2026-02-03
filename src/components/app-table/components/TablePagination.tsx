import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import {
  FirstPage,
  LastPage,
  ChevronLeft,
  ChevronRight,
  Download,
} from "@mui/icons-material";

interface TablePaginationProps {
  currentPage?: number;
  totalPages?: number;
  totalItems?: number;
  itemsPerPage?: number;
  onPageChange?: (page: number) => void;
  pagination?: any;
}

const TablePagination: React.FC<TablePaginationProps> = ({
  currentPage = 1,
  totalPages = 1,
  totalItems = 0,
  itemsPerPage = 20,
  onPageChange,
  pagination,
}) => {
  // Parse pagination if it's a string or use provided props
  let page = currentPage;
  let totalPagesCount = totalPages;
  let totalItemsCount = totalItems;
  let pageSize = itemsPerPage;

  if (pagination) {
    if (typeof pagination === "string") {
      try {
        const parsed = JSON.parse(pagination);
        page = parsed.currentPage || parsed.page || currentPage;
        totalPagesCount = parsed.totalPages || totalPages;
        totalItemsCount = parsed.totalItems || parsed.total || totalItems;
        pageSize = parsed.pageSize || parsed.itemsPerPage || itemsPerPage;
      } catch (e) {
        // If parsing fails, use defaults
      }
    } else {
      page = pagination.currentPage || pagination.page || currentPage;
      totalPagesCount = pagination.totalPages || totalPages;
      totalItemsCount = pagination.totalItems || pagination.total || totalItems;
      pageSize = pagination.pageSize || pagination.itemsPerPage || itemsPerPage;
    }
  }

  // Convert to 0-based index for calculations
  const currentPageIndex = page - 1;
  const startItem = currentPageIndex * pageSize + 1;
  const endItem = Math.min((currentPageIndex + 1) * pageSize, totalItemsCount);

  const handlePageChange = (newPage: number) => {
    if (onPageChange) {
      onPageChange(newPage);
    }
  };

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxPagesToShow = 2;

    if (totalPagesCount <= maxPagesToShow + 1) {
      // Show all pages if total is small
      for (let i = 0; i < totalPagesCount; i++) {
        pages.push(i + 1);
      }
    } else {
      // Show pages with ellipsis
      if (page <= 2) {
        // Show first pages
        for (let i = 1; i <= 3; i++) {
          pages.push(i);
        }
        if (totalPagesCount > 3) {
          pages.push("...");
          pages.push(totalPagesCount);
        }
      } else if (page >= totalPagesCount - 1) {
        // Show last pages
        pages.push(1);
        pages.push("...");
        for (let i = totalPagesCount - 2; i <= totalPagesCount; i++) {
          pages.push(i);
        }
      } else {
        // Show pages around current page
        pages.push(1);
        pages.push("...");
        for (let i = page - 1; i <= page + 1; i++) {
          pages.push(i);
        }
        pages.push("...");
        pages.push(totalPagesCount);
      }
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "8px 16px",
        backgroundColor: "var(--app-bg-secondary)",
        borderTop: "1px solid",
        borderColor: "var(--app-secondary-200)",
      }}
    >
      {/* Left side - Pagination controls */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        {/* First Page Button */}
        <IconButton
          size="small"
          onClick={() => handlePageChange(1)}
          disabled={page === 1}
          sx={{
            border: "1px solid",
            borderColor: "var(--app-secondary-300)",
            borderRadius: "4px",
            padding: "4px",
            color: "var(--app-text-primary)",
            "&:hover": {
              backgroundColor: "var(--app-primary-100)",
              borderColor: "var(--app-primary-500)",
              color: "var(--app-primary-500)",
            },
            "&.Mui-disabled": {
              opacity: 0.5,
              borderColor: "var(--app-secondary-200)",
            },
          }}
        >
          <FirstPage fontSize="small" />
        </IconButton>

        {/* Previous Page Button */}
        <IconButton
          size="small"
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1}
          sx={{
            border: "1px solid",
            borderColor: "var(--app-secondary-300)",
            borderRadius: "4px",
            padding: "4px",
            color: "var(--app-text-primary)",
            "&:hover": {
              backgroundColor: "var(--app-primary-100)",
              borderColor: "var(--app-primary-500)",
              color: "var(--app-primary-500)",
            },
            "&.Mui-disabled": {
              opacity: 0.5,
              borderColor: "var(--app-secondary-200)",
            },
          }}
        >
          <ChevronLeft fontSize="small" />
        </IconButton>

        {/* Page Numbers */}
        {pageNumbers.map((pageNum, index) => {
          if (pageNum === "...") {
            return (
              <Typography
                key={`ellipsis-${index}`}
                variant="body2"
                sx={{
                  px: 1,
                  color: "var(--app-text-secondary)",
                  fontSize: "14px",
                }}
              >
                ...
              </Typography>
            );
          }

          const pageNumber = pageNum as number;
          const isActive = pageNumber === page;

          return (
            <Box
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)}
              sx={{
                minWidth: "32px",
                height: "32px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                borderRadius: "4px",
                border: "1px solid",
                borderColor: isActive
                  ? "var(--app-primary-500)"
                  : "var(--app-secondary-300)",
                backgroundColor: isActive
                  ? "var(--app-primary-500)"
                  : "transparent",
                color: isActive ? "white" : "var(--app-text-primary)",
                fontSize: "14px",
                fontWeight: isActive ? 600 : 400,
                transition: "all 0.2s",
                "&:hover": {
                  backgroundColor: isActive
                    ? "var(--app-primary-600)"
                    : "var(--app-primary-100)",
                  borderColor: isActive
                    ? "var(--app-primary-600)"
                    : "var(--app-primary-500)",
                  color: isActive ? "white" : "var(--app-primary-500)",
                },
              }}
            >
              {pageNumber}
            </Box>
          );
        })}

        {/* Next Page Button */}
        <IconButton
          size="small"
          onClick={() => handlePageChange(page + 1)}
          disabled={page >= totalPagesCount}
          sx={{
            border: "1px solid",
            borderColor: "var(--app-secondary-300)",
            borderRadius: "4px",
            padding: "4px",
            color: "var(--app-text-primary)",
            "&:hover": {
              backgroundColor: "var(--app-primary-100)",
              borderColor: "var(--app-primary-500)",
              color: "var(--app-primary-500)",
            },
            "&.Mui-disabled": {
              opacity: 0.5,
              borderColor: "var(--app-secondary-200)",
            },
          }}
        >
          <ChevronRight fontSize="small" />
        </IconButton>

        {/* Last Page Button */}
        <IconButton
          size="small"
          onClick={() => handlePageChange(totalPagesCount)}
          disabled={page >= totalPagesCount}
          sx={{
            border: "1px solid",
            borderColor: "var(--app-secondary-300)",
            borderRadius: "4px",
            padding: "4px",
            color: "var(--app-text-primary)",
            "&:hover": {
              backgroundColor: "var(--app-primary-100)",
              borderColor: "var(--app-primary-500)",
              color: "var(--app-primary-500)",
            },
            "&.Mui-disabled": {
              opacity: 0.5,
              borderColor: "var(--app-secondary-200)",
            },
          }}
        >
          <LastPage fontSize="small" />
        </IconButton>

        {/* Out of X Pages text */}
        <Typography
          variant="body2"
          sx={{
            ml: 2,
            color: "var(--app-text-secondary)",
            fontSize: "14px",
          }}
        >
          Out of {totalPagesCount} Pages
        </Typography>
      </Box>

      {/* Right side - Total count and download */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Typography
          variant="body2"
          sx={{
            color: "var(--app-text-secondary)",
            fontSize: "14px",
          }}
        >
          Displaying {startItem} to {endItem} (out of {totalItemsCount})
        </Typography>
        <IconButton
          size="small"
          sx={{
            color: "var(--app-text-secondary)",
            "&:hover": {
              backgroundColor: "var(--app-primary-100)",
              color: "var(--app-primary-500)",
            },
          }}
        >
          <Download fontSize="small" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default TablePagination;
