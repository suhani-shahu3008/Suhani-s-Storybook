import { useState } from 'react';
import './styles/figma-tokens.css';
import { Header } from './components/Header/Header';
import { NavigationBar } from './components/Navigation Bar/NavigationBar.stories';
import { Cards } from './components/Cards/Cards';
import { Table } from './components/Table/Table';
import { DeliveryTrendsCard } from './components/Delivery trends card/Delivery trends card';
import { DelayReasonsCard } from './components/Delay Reasons card/Delay Reasons card';
import { TopDelayedZonesCard } from './components/Top Delayed Zones card/Top Delayed Zones card';
import { UpcomingDeliveriesCard } from './components/Upcoming Deliveries card/Upcoming Deliveries card';
import { FleetStatusCard } from './components/Fleet Status card/Fleet Status card';
import { LiveFleetOverviewCard } from './components/Live Fleet Overview card/Live Fleet Overview card';
import { Maps } from './components/Maps/Maps';
import { TabBars } from './components/Tab bars/Tab bars';
import { ProcessBar } from './components/Process bar/Process bar';

export function App() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--uedp-slate-100)', fontFamily: 'var(--uedp-font-family)' }}>
      <NavigationBar
        type={collapsed ? 'Collapsed' : 'Expanded'}
        text="Dashboard"
        frame
        count={6}
        activeIndex={1}
        onClick={() => setCollapsed(prev => !prev)}
      />

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflowX: 'hidden' }}>
        <Header />

        <main style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '32px', maxWidth: '1600px', margin: '0 auto', width: '100%', boxSizing: 'border-box' }}>
          {/* Top KPI Cards Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
            <Cards type="Card 1" title="Active Vehicles" value="1,420" change="+12.5% from last month" />
            <Cards type="Card 2" title="On-Time Delivery Rate" value="96.4%" change="+2.1% from last month" />
            <Cards type="Card 3" title="Avg Turnaround Time" value="24.8 mins" change="-14.2% from last month" />
            <Cards type="Card 4" title="High Delay Alerts" value="14" change="+3 from last month" />
          </div>

          {/* Navigation Tab Bar */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <TabBars
              prop1stText="Live Map & Telemetry"
              prop2ndText="Active Manifest"
              prop3rdText="Delay Diagnostics"
              prop4thText="Fleet Analytics"
            />
            <div style={{ width: '300px' }}>
              <ProcessBar process={82} label="Daily Delivery Target" />
            </div>
          </div>

          {/* Live Map & Fleet Overview */}
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '24px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <Maps size="Standard" />
              <LiveFleetOverviewCard />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <FleetStatusCard />
              <UpcomingDeliveriesCard />
            </div>
          </div>

          {/* Analytics Charts Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '24px' }}>
            <DeliveryTrendsCard />
            <DelayReasonsCard />
            <TopDelayedZonesCard />
          </div>

          {/* Main Table */}
          <Table />
        </main>
      </div>
    </div>
  );
}

export default App;
