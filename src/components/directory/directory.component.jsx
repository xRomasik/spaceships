import { useSelector } from 'react-redux'
import MenuItem from '../menu-item/menu-item.jsx';
import { selectDirectorySection } from '../../redux/directory/directory.selectors';

import './directory.styles.scss';

const Directory = () => {

    const sections = useSelector(state => selectDirectorySection(state))

    return (
        <div className='directory-menu'>
            {sections.map(({ id, ...otherSectionProps }) => {
                return <MenuItem key={id} {...otherSectionProps} />
            })}
        </div>
    )
}

export default Directory;