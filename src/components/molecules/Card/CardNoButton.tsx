import Card from './Card'
import heroImg from '../../../assets/hero.png'

const CardNoButton: React.FC = () => {
  return (
    <Card title="No Button Card">
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
        <img src={heroImg} alt="hero" className="eds-card__media" />
        <div>
          <p style={{ margin: 0 }}>This card shows an image but intentionally has no action button.</p>
        </div>
      </div>
    </Card>
  )
}

export default CardNoButton
