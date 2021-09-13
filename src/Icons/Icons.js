import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBold, faCode, faImage, faItalic, faListOl, faListUl, faQuoteRight, faSave, faUnderline } from '@fortawesome/free-solid-svg-icons'

const Icons = {
  Bold: <FontAwesomeIcon icon={faBold} />,
  Code: <FontAwesomeIcon icon={faCode} />,
  Image: <FontAwesomeIcon icon={faImage} />,
  Italic: <FontAwesomeIcon icon={faItalic} />,
  OrderedList: <FontAwesomeIcon icon={faListOl} />,
  Quote: <FontAwesomeIcon icon={faQuoteRight} />,
  Save: <FontAwesomeIcon icon={faSave} />,
  Underline: <FontAwesomeIcon icon={faUnderline} />,
  UnorderedList: <FontAwesomeIcon icon={faListUl} />,

}

export default Icons;