import { useNavigate } from 'react-router';
import { Dropdown, Icon, Menu, Segment } from 'semantic-ui-react';
import { useSensitiveMode } from '../../hooks';

// placeholder
const getSettings = () => ({
  network: 'Testnet',
  operatingMode: 'Light client',
});

export interface AppBarTopProps {
  attached?: boolean | 'top' | 'bottom' | undefined;
  onLogout?: () => void;
}

function AppBarTop({ attached, onLogout }: AppBarTopProps) {
  const { sensitiveModeEnabled, setSensitiveMode } = useSensitiveMode();
  const { network, operatingMode } = getSettings();
  const navigate = useNavigate();

  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    }

    navigate('/wallets');
  };

  return (
    <>
      <Segment inverted attached={attached}>
        <Menu inverted secondary>
          <Menu.Item header>Wallet X</Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item>{network}</Menu.Item>
            <Menu.Item>{operatingMode} mode</Menu.Item>
            <Menu.Item
              icon={sensitiveModeEnabled ? 'eye slash' : 'eye'}
              onClick={() => setSensitiveMode(!sensitiveModeEnabled)}
            />
            <Dropdown item icon="user">
              <Dropdown.Menu>
                <Dropdown.Item>
                  <Icon name="wrench" />
                  <span className="text">Settings</span>
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={handleLogout}>
                  <Icon name="sign-out" />
                  <span className="text">Sign out of wallet</span>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Menu>
        </Menu>
      </Segment>
    </>
  );
}

export default AppBarTop;
