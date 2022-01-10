import { Link } from "react-router-dom";
import "./Pricing.css";

export const Pricing = () => {
  const cardTypeBasic = {
    packageType: 'Basic',
    btc: 1,
    duration: 3,
    action: 'Views',
    actionType: 'Featured',
    room: 'Private Quarters',
    link: '/contact',
    linkName: 'Book'
  }

  const cardTypeSuite = {
    packageType: 'Suite',
    btc: 1,
    duration: 3,
    action: 'Views',
    actionType: 'Featured',
    room: 'Private Quarters',
    link: '/contact',
    linkName: 'Book'
  }

  const cardTypeExecutive = {
    packageType: 'Executive',
    btc: 1,
    duration: 3,
    action: 'Views',
    actionType: 'Featured',
    room: 'Private Quarters',
    link: '/contact',
    linkName: 'Book'
  }

  return (
    <div className='pricing'>

      <div className='card-container'>
        <Card pricingType={cardTypeBasic} />
        <Card pricingType={cardTypeSuite} />
        <Card pricingType={cardTypeExecutive} />
      </div>

    </div>
  )
}

const Card = ({ pricingType }) => {
  const { packageType, btc, duration, action, actionType, room, link, linkName } = pricingType

  return (
    <div className='card'>
      <h3>- {packageType} -</h3>
      <span className='bar'></span>
      <p className='btc'>{btc} BTC</p>
      <p>- {duration} Days -</p>
      <p>- {action} -</p>
      <p>- {actionType} -</p>
      <p>- {room} -</p>
      <Link to={link} className='btn'>{linkName}</Link>
    </div>
  )
};
