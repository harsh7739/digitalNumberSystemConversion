import logo from './logo.svg';
import './App.css';
import BinaryToDecimal from './component/Pages/BinaryToOther/BinaryToDecimal';
import DecimalToBinary from './component/Pages/DecimalToOther/DecimalToBinary';
import DecimalToOctal from './component/Pages/DecimalToOther/DecimalToOctal';
import DecimalToHexaDecimal from './component/Pages/DecimalToOther/DecimalToHexaDecimal';
import BinaryToOctal from './component/Pages/BinaryToOther/BinaryToOctal';
import BinaryToHexaDecimal from './component/Pages/BinaryToOther/BinaryToHexaDecimal';
import OctalToBinary from './component/Pages/OctalToOther/OctalToBinary';
import OctalToDecimal from './component/Pages/OctalToOther/OctalToDecimal';
import OctalToHexaDecimal from './component/Pages/OctalToOther/OctalToHexaDecimal';
import HexadecimalToBinary from './component/Pages/HexadecimalToOther/HexadecimalToBinary';
import HexadecimalToDecimal from './component/Pages/HexadecimalToOther/HexadecimalToDecimal';
import HexadecimalToOctal from './component/Pages/HexadecimalToOther/HexadecimalToOctal';

function App() {
  return (
    <div className="App">
     <h4>Welcome To Digital Number converter</h4>
     <BinaryToDecimal />
     <BinaryToOctal />
     <BinaryToHexaDecimal />
     <DecimalToBinary />
     <DecimalToOctal />
     <DecimalToHexaDecimal />
     <OctalToBinary />
     <OctalToDecimal />
     <OctalToHexaDecimal />
     <HexadecimalToBinary />
     <HexadecimalToOctal />
     <HexadecimalToDecimal />
    </div>
  );
}

export default App;
