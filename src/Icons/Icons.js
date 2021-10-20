import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBold, faCode, faImage, faItalic, faLink, faListOl, faListUl, faQuoteRight, faSave, faUnderline, faUnlink, faVideo } from '@fortawesome/free-solid-svg-icons'

const Icons = {
  Bold: <FontAwesomeIcon icon={faBold} />,
  Code: <FontAwesomeIcon icon={faCode} />,
  Image: <FontAwesomeIcon icon={faImage} />,
  Italic: <FontAwesomeIcon icon={faItalic} />,
  Link: <FontAwesomeIcon icon={faLink} />,
  OrderedList: <FontAwesomeIcon icon={faListOl} />,
  Quote: <FontAwesomeIcon icon={faQuoteRight} />,
  Save: <FontAwesomeIcon icon={faSave} />,
  Underline: <FontAwesomeIcon icon={faUnderline} />,
  Unlink: <FontAwesomeIcon icon={faUnlink} />,
  UnorderedList: <FontAwesomeIcon icon={faListUl} />,
  Video: <FontAwesomeIcon icon={faVideo} />,
}

export default Icons;