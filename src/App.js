import React from 'react';
import {useTable} from 'react-table'
import styled from 'styled-components'
import './App.css';


const Styles = styled.div `
  table {
    width: 100%;
    border-spacing: 0;
    border: 1px solid black;
    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }
    th,
    td {
      margin: 0;
      padding: 1rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;
      :last-child {
        border-right: 0;
      }
    }
  }
`

function Table({columns, data}) {
  const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = useTable({columns, data})

  // Render Data Table UI
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup
              .headers
              .map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row
                .cells
                .map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

function App() {
  const data = [
    {

      "id": 1,
    
      "first_name": "Aurlie",
    
      "last_name": "Stubbington",
    
      "email": "astubbington0@tmall.com"
    
    }, {
    
      "id": 2,
    
      "first_name": "Seymour",
    
      "last_name": "Nevison",
    
      "email": "snevison1@histats.com"
    
    }, {
    
      "id": 3,
    
      "first_name": "Magdaia",
    
      "last_name": "Tummons",
    
      "email": "mtummons2@exblog.jp"
    
    }, {
    
      "id": 4,
    
      "first_name": "Josie",
    
      "last_name": "Thornley",
    
      "email": "jthornley3@earthlink.net"
    
    }, {
    
      "id": 5,
    
      "first_name": "Boyce",
    
      "last_name": "Titchard",
    
      "email": "btitchard4@tinyurl.com"
    
    }                          
  ]

  const columns = [
    {
      Header: 'Id',
      accessor: 'id'
    }, {
      Header: 'First Name',
      accessor: 'first_name'
    }, {
      Header: 'Last Name',
      accessor: 'last_name'
    }, {
      Header: 'Email',
      accessor: 'email'
    }
  ]

  return (
    <Styles>
      <Table
        data={data}
        columns={columns}
      />
    </Styles>
  )

}

export default App;