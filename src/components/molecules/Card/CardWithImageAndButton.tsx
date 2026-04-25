import Card from './Card'
import heroImg from '../../../assets/hero.png'
import DownloadButton from '../../atoms/DownloadButton'

const CardWithImageAndButton: React.FC = () => {
  return (
    <Card title="Image + Button Card" footer={<DownloadButton href={heroImg} download="hero.png">Download</DownloadButton>}>
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
        <img src={heroImg} alt="hero" className="eds-card__media" />
        <div>
          <p style={{ margin: 0 }}>This card shows an image and includes a footer action button.</p>
        </div>
      </div>
    </Card>
  )
}

export default CardWithImageAndButton
