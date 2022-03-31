import { useMantineColorScheme, ActionIcon } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import { Sun, MoonStars } from 'tabler-icons-react';

export function ColorSchemeToggle() {
  const { t } = useTranslation('appBarTop');
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const Icon = colorScheme === 'dark' ? Sun : MoonStars;

  return (
    <ActionIcon
      variant="outline"
      onClick={() => toggleColorScheme()}
      title={t('toggleColorScheme')}
    >
      <Icon size={18} />
    </ActionIcon>
  );
}
