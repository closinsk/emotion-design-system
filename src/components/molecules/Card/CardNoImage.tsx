import Card from './Card'
import DownloadButton from '../../atoms/DownloadButton'

const CardNoImage: React.FC = () => {
  return (
    <Card title="No Image Card" footer={<DownloadButton href="#" download="file.txt">Download</DownloadButton>}>
      <p style={{ margin: 0 }}>This card has no image but includes an action button in the footer.</p>
    </Card>
  )
}

export default CardNoImage
