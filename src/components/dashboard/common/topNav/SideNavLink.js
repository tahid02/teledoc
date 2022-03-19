import { NavLink } from 'react-router-dom';

const activeStyle = {
  color: 'black',
  backgroundColor: 'lightgray',
  display: 'block',
  // padding: ' 2px 0px 2px 5px',
  paddingLeft: '10px',
  borderRadius: '5px',
  width: '100%',
  marginLeft: '-10px',
};
// eslint-disable-next-line react/prop-types
const SideNavLink = ({ route, children }) => {
  return (
    <NavLink
      to={route}
      style={({ isActive }) => (isActive ? activeStyle : null)}
    >
      <div className="hover-bg-gray-left text-dark ps-0 py-1  rounded-3 w-100">
        {children}
      </div>
    </NavLink>
  );
};

export default SideNavLink;
