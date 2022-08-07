import { Map, MapApiLoaderHOC, } from 'react-bmapgl'
import './App.css'
function App() {
  console.log(window.BMapGL);
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <Map
        style={{ height: 300, width: '48%' }}
        center={new window.BMapGL.Point(116.404449, 39.914889)}
        zoom={12}
      />
      <Map
        style={{ height: 300, width: '48%' }}
        center={new window.BMapGL.Point(116.404449, 39.914889)}
        zoom={12}
      />
    </div>
  );
}

export default MapApiLoaderHOC({ak:'CxPzIyPLFEE9yoNIaamX4BS0xTOWijAw' })(App);
