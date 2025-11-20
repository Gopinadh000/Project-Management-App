/**
 * Example: DataTable with API Integration
 * 
 * This demonstrates how to use the DataTable with server-side
 * pagination, search, sort, and filtering
 */

import { useState } from 'react';
import { DataTable, TableParams } from '../index';
import usersData from '../dummy-data/usersData';

// Example: Mock API call
const fetchUsers = async (params: TableParams) => {
  console.log('API Request Parameters:', params);
  
  // In a real application, you would make an API call here:
  // const response = await fetch(`/api/users?${new URLSearchParams({
  //   page: params.page.toString(),
  //   pageSize: params.pageSize.toString(),
  //   search: JSON.stringify(params.search),
  //   sort: JSON.stringify(params.sort),
  // })}`);
  // return response.json();
  
  // Mock response for demonstration
  return new Promise<{
    data: typeof usersData.rowsData;
    totalItems: number;
    totalPages: number;
  }>((resolve) => {
    setTimeout(() => {
      resolve({
        data: usersData.rowsData,
        totalItems: usersData.totalItems,
        totalPages: usersData.totalPages,
      });
    }, 500);
  });
};

export default function ApiIntegrationExample() {
  const [data, setData] = useState(usersData.rowsData);
  const [loading, setLoading] = useState(false);
  const [totalItems, setTotalItems] = useState(usersData.totalItems);
  const [totalPages, setTotalPages] = useState(usersData.totalPages);

  // Handle table parameter changes (pagination, search, sort)
  const handleTableParamsChange = async (params: TableParams) => {
    console.log('Table Parameters Changed:', params);
    
    setLoading(true);
    
    try {
      const result = await fetchUsers(params);
      setData(result.data);
      setTotalItems(result.totalItems);
      setTotalPages(result.totalPages);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Users Table with API Integration</h2>
      {loading && <p>Loading...</p>}
      
      <DataTable
        columnsData={usersData.columnsData}
        rowsData={data}
        totalItems={totalItems}
        totalPages={totalPages}
        totalItemsPerPage={usersData.totalItemsPerPage}
        onTableParamsChange={handleTableParamsChange}
        onRowClick={(row) => console.log('Row clicked:', row)}
      />
    </div>
  );
}

/**
 * Example: Real API Integration with Axios
 */

/*
import axios from 'axios';

export function RealApiExample() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [itemsPerPage] = useState(10);

  const handleTableParamsChange = async (params: TableParams) => {
    setLoading(true);
    
    try {
      const response = await axios.get('/api/users', {
        params: {
          page: params.page,
          pageSize: params.pageSize,
          // Send search params as individual query parameters
          ...params.search,
          // Send sort params
          sortField: params.sort?.field,
          sortOrder: params.sort?.order,
        },
      });

      setData(response.data.users);
      setTotalItems(response.data.totalItems);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <DataTable
      columnsData={columnsData}
      rowsData={data}
      totalItems={totalItems}
      totalPages={totalPages}
      totalItemsPerPage={itemsPerPage}
      onTableParamsChange={handleTableParamsChange}
    />
  );
}
*/

/**
 * Example: Backend API Endpoint (Node.js/Express)
 */

/*
// Backend API endpoint example
app.get('/api/users', async (req, res) => {
  const {
    page = 0,
    pageSize = 10,
    sortField,
    sortOrder = 'asc',
    ...searchParams
  } = req.query;

  try {
    // Build query
    let query = db.select('*').from('users');

    // Apply search filters
    Object.keys(searchParams).forEach((field) => {
      if (searchParams[field]) {
        query = query.where(field, 'like', `%${searchParams[field]}%`);
      }
    });

    // Apply sorting
    if (sortField) {
      query = query.orderBy(sortField, sortOrder);
    }

    // Get total count
    const totalItems = await query.clone().count();

    // Apply pagination
    const users = await query
      .offset(page * pageSize)
      .limit(pageSize);

    res.json({
      users,
      totalItems: totalItems[0]['count(*)'],
      totalPages: Math.ceil(totalItems[0]['count(*)'] / pageSize),
      currentPage: parseInt(page),
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});
*/

