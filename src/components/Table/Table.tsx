import React from 'react';
import './Table.css';
import { TableHeader } from '../Table Header/Table Header';
import { TableHeaderRow } from '../Table Header Row/Table Header Row';
import { TableRow } from '../Table Row/Table Row';
import type { TableRowStatus } from '../Table Row/Table Row';
import { PaginationRow } from '../Pagination Row/Pagination Row';

export interface TableProps {
  title?: string;
}

const rows: { id: string; vehicleId: string; type: string; model: string; capacity: string; assignedDriver: string; status: TableRowStatus }[] = [
  { id: 'TRK-8821-E', vehicleId: 'TRK-8821-E', type: 'Heavy Freight', model: 'Ashok Leyland 1616', capacity: '16 Ton', assignedDriver: 'Rajesh Kumar', status: 'Success' },
  { id: 'VAN-4412-A', vehicleId: 'VAN-4412-A', type: 'Express Van', model: 'Tata Ace', capacity: '1 Ton', assignedDriver: 'Amit Verma', status: 'Warning' },
  { id: 'COLD-9910-R', vehicleId: 'COLD-9910-R', type: 'Refrigerated Cold', model: 'Eicher Pro 3015', capacity: '5 Ton', assignedDriver: 'Sunil Mehta', status: 'Error' },
  { id: 'VAN-2201-B', vehicleId: 'VAN-2201-B', type: 'Local Dispatch', model: 'Mahindra Bolero Pickup', capacity: '1.5 Ton', assignedDriver: 'Priya Sharma', status: 'Success' },
  { id: 'TRK-1099-H', vehicleId: 'TRK-1099-H', type: 'Long Haul Truck', model: 'Ashok Leyland 3123', capacity: '25 Ton', assignedDriver: 'Vikram Singh', status: 'Info' },
];

export const Table: React.FC<TableProps> = ({
  title = 'Live Fleet Logistics Manifest'
}) => {
  return (
    <div className="uedp-table-card">
      <TableHeader title={title} />
      <TableHeaderRow />
      <div className="uedp-table-card__body">
        {rows.map(r => (
          <TableRow
            key={r.id}
            vehicleId={r.vehicleId}
            type={r.type}
            model={r.model}
            capacity={r.capacity}
            assignedDriver={r.assignedDriver}
            status={r.status}
          />
        ))}
      </div>
      <PaginationRow recordsLabel={`Showing 1 to ${rows.length} of ${rows.length} records`} pageNumber={1} />
    </div>
  );
};
