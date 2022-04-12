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
            title: 'User id',
            field: 'user_id',
            type: 'string',
          },
          {
            title: 'Month',
            field: 'month',
            type: 'string',
          },
          { title: 'Income', field: 'income', type: 'numeric' },
          {
            title: 'Agg expected expenses amount',
            field: 'agg_expected_expenses_amount',
            type: 'numeric',
          },
          {
            title: 'Agg expected goal amount',
            field: 'agg_expected_goal_amount',
            type: 'numeric',
          },
          {
            title: 'Agg expected savings amount',
            field: 'agg_expected_savings_amount',
            type: 'numeric',
          },
          {
            title: 'Agg transfer from income',
            field: 'agg_transfer_from_income',
            type: 'numeric',
          },
          {
            title: 'Agg actual expenses from expected expenses',
            field: 'agg_actual_expenses_from_expected_expenses',
            type: 'numeric',
          },
          {
            title: 'Agg actual expenses from unexpected expenses',
            field: 'agg_actual_expenses_from_unexpected_expenses',
            type: 'numeric',
          },
          {
            title: 'Agg actual goal amount',
            field: 'agg_actual_goal_amount',
            type: 'numeric',
          },
          {
            title: 'Agg actual savings amount',
            field: 'agg_actual_savings_amount',
            type: 'numeric',
          },
          {
            title: 'Agg goal residuals',
            field: 'agg_goal_residuals',
            type: 'numeric',
          },
          {
            title: 'Agg expected expense residuals',
            field: 'Agg_expected_expense_residuals',
            type: 'numeric',
          },
          {
            title: 'Agg savings residuals',
            field: 'agg_savings_residuals',
            type: 'numeric',
          },
          {
            title: 'Total income',
            field: 'total_income',
            type: 'numeric',
          },
          {
            title: 'Total expected expenses',
            field: 'total_expected_expenses',
            type: 'numeric',
          },
          {
            title: 'Expected remaining balance',
            field: 'expected_remaining_balance',
            type: 'numeric',
          },
          {
            title: 'Actual remaining balance',
            field: 'actual_remaining_balance',
            type: 'numeric',
          },
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
        title='Monthly summary'
      />
    </div>
  );
}
