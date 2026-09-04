import React, { useState } from 'react';
import './Table.css';
import { TableHeader } from '../Table Header/Table Header';
import { TableHeaderRow } from '../Table Header Row/Table Header Row';
import { TableRow } from '../Table Row/Table Row';
import { PaginationRow } from '../Pagination Row/Pagination Row';

export interface TableProps {
  title?: string;
}

export const Table: React.FC<TableProps> = ({
  title = 'Live Fleet Logistics Manifest'
}) => {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const rows = [
    { id: 'SHP-101', driverName: 'Rajesh Kumar', driverInitials: 'RK', driverRole: 'Heavy Freight', vehicleId: 'TRK-8821-E', route: 'Mumbai ➔ Pune (Expressway)', status: 'Success' as const, statusLabel: 'On Schedule', eta: '14:30 PM (25m)' },
    { id: 'SHP-102', driverName: 'Amit Verma', driverInitials: 'AV', driverRole: 'Express Van', vehicleId: 'VAN-4412-A', route: 'Delhi ➔ Gurugram (NH-48)', status: 'Warning' as const, statusLabel: 'Congested +15m', eta: '15:10 PM (+15m)' },
    { id: 'SHP-103', driverName: 'Sunil Mehta', driverInitials: 'SM', driverRole: 'Refrigerated Cold', vehicleId: 'COLD-9910-R', route: 'Bengaluru ➔ Mysuru', status: 'Error' as const, statusLabel: 'Delayed +45m', eta: '17:00 PM (+45m)' },
    { id: 'SHP-104', driverName: 'Priya Sharma', driverInitials: 'PS', driverRole: 'Local Dispatch', vehicleId: 'VAN-2201-B', route: 'Hyderabad ➔ Secunderabad', status: 'Success' as const, statusLabel: 'Delivered', eta: 'Completed' },
    { id: 'SHP-105', driverName: 'Vikram Singh', driverInitials: 'VS', driverRole: 'Long Haul Truck', vehicleId: 'TRK-1099-H', route: 'Ahmedabad ➔ Surat', status: 'Info' as const, statusLabel: 'In Transit', eta: '16:45 PM (1h 10m)' }
  ];

  const handleToggle = (id: string) => {
    setSelectedIds(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  const handleSelectAll = (checked: boolean) => {
    setSelectedIds(checked ? rows.map(r => r.id) : []);
  };

  return (
    <div className="uedp-table-card">
      <TableHeader title={title} count={rows.length} />
      <TableHeaderRow
        selectAll={selectedIds.length === rows.length}
        onSelectAll={handleSelectAll}
      />
      <div className="uedp-table-card__body">
        {rows.map(r => (
          <TableRow
            key={r.id}
            {...r}
            selected={selectedIds.includes(r.id)}
            onSelect={handleToggle}
          />
        ))}
      </div>
      <PaginationRow totalItems={1248} currentPage={1} itemsPerPage={5} />
    </div>
  );
};
