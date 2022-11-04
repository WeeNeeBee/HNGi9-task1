import Profile from "./components/Profile";
import Links from "./components/Links";
import { RiShareForwardLine } from 'react-icons/ri'
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import './App.css'


const AppComps = () => {

    const buttons = [
        {id: 'btn__zuri', text: 'Zuri Team', link:'https://training.zuri.team'},
        {id: 'books', text: 'Zuri Books', link:'http://books.zuri.team/', subText:'Hurray!!! This is your lucky day, you have just landed where you will find the best learner-friendly books on design and coding.'},
        {id: 'book__python', text: 'Python Books', link:'https://books.zuri.team/python-for-beginners?ref_id=<WeeNeeBee>', subText:'Get value for a python beginners book. Become a Python expert quicker than you imagined!'},
        {id: 'pitch', text: 'Background Check for Coders', link:'https://background.zuri.team/', subText:'We offer proffesional coders scout services. Click to jump in!'},
        {id: 'book__design', text: 'Design Books', link:'https://books.zuri.team/design-rules', subText:'You have just hit the jackpot! Click for a free copy of the Zuri design book for beginners.'},
    ]

    return (
        <div>
            <RiShareForwardLine className="share-icon" title="share"/>
            <BiDotsHorizontalRounded className="mobile-menu" />
            <Profile />
            <Links buttons = {buttons}/>
        </div>
    )
}


export default AppComps