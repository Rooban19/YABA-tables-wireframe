import React from 'react';
import MaterialTable from 'material-table';
import { useState } from 'react';

export default function Income() {
  const [data, setdata] = useState([]);

  const updateData = (newData) => {
    setdata([...data, newData]);
  };

  return (
    <div style={{ maxWidth: '100%' }}>
      <MaterialTable
        columns={[
          {
            title: 'Date',
            field: 'date',
            type: 'date',
          },
          {
            title: 'Amount',
            field: 'amount',
            type: 'numeric',
          },
          { title: 'Currency', field: 'currency', type: 'string' },
          { title: 'Account', field: 'account', type: 'string' },
          { title: 'Account_Id', field: 'account_id', type: 'string' },
          { title: 'isRecurring', field: 'isrecurring', type: 'boolean' },
        ]}
        options={{
          headerStyle: {
            background: '#500472',
            fontFamily: 'sans-serif',
            color: '#FFFFFF',
            fontSize: 16,
            justifyContent: 'center',
          },
          rowStyle: {
            backgroundColor: '#EFF0F6',
          },
          actionsColumnIndex: -1,
        }}
        editable={{
          onRowAdd: (newData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                updateData(newData);
                resolve();
              }, 1000);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataUpdate = [...data];
                const index = oldData.tableData.id;
                dataUpdate[index] = newData;
                setdata([...dataUpdate]);
                resolve();
              }, 1000);
            }),
          onRowDelete: (oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataDelete = [...data];
                const index = oldData.tableData.id;
                dataDelete.splice(index, 1);
                setdata([...dataDelete]);
                resolve();
              }, 1000);
            }),
        }}
        data={data}
        title='Income'
      />
    </div>
  );
}
