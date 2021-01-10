import './App.css';
import Welcome from './components/Welcome'
import Greet from './components/Greet'
import Counter from './components/Counter'
import Parent from './components/Parent'
import Conditional from './components/Conditional'
import NameList from './components/NameList'
import Form from './components/Form'
import Fragment from './components/FragmentDemo'
import Pure from './components/PureComponent'
import Refs from './components/RefsDemo'
import FRParentInput from './components/FRParentInput'
import Portal from './components/PortalDemo'
import ClickCounter from './components/ClickCounter'
import HoverCounter from './components/HoverCounter'
import ClickCounterTwo from './components/ClickCounter2'
import HoverCounterTwo from './components/HoverCounter2'
import RenderProps from './components/RenderProps'

function App() {
  return (
    <div className="App">
        <Welcome name='superman' />
        <Welcome name='batman' />
        <Welcome name='spiderman' />
        <Greet name='Yo Yo'/>
        <Counter />
        <Parent />
        <Conditional />
        <NameList />
        <Form />
        <Fragment />
        <Pure />
        <Refs />
        <FRParentInput />
        <Portal />
        <ClickCounter />
        <HoverCounter />
        <RenderProps
          render={(count,incrementHandler)=>(
          <ClickCounterTwo count={count} incrementHandler={incrementHandler}/>)}/>

          <RenderProps
            render={(count,incrementHandler)=>(
            <HoverCounterTwo count={count} incrementHandler={incrementHandler}/>)}/>
    </div>
  );
}

export default App;
