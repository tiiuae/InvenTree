import { Trans } from '@lingui/react/macro';
import {
  Button,
  Center,
  Container,
  Divider,
  Group,
  Loader,
  Paper,
  Stack
} from '@mantine/core';
import { Outlet, useNavigate } from 'react-router-dom';
import SplashScreen from '../../components/SplashScreen';
import { StylishText } from '../../components/items/StylishText';
import { doLogout } from '../../functions/auth';

export default function LoginLayoutComponent() {
  return (
    <SplashScreen>
      <Center mih='100vh' p='lg'>
        <Container>
          <Outlet />
        </Container>
      </Center>
    </SplashScreen>
  );
}

export function Wrapper({
  children,
  titleText,
  logOff = false,
  loader = false,
  smallPadding = false
}: Readonly<{
  children?: React.ReactNode;
  titleText: string;
  logOff?: boolean;
  loader?: boolean;
  smallPadding?: boolean;
}>) {
  const navigate = useNavigate();

return (
  <Paper
    p="xl"
    withBorder={false}
    shadow="none"
    // style={{
    //   background: "rgba(255, 255, 255)",
    //   borderColor: "rgba(255, 255, 255, 0)", // Optional: custom border color
    //   borderWidth: "1px",  // Optional: custom border width
    //   borderStyle: "solid" // Optional: custom border style
    // }}
    miw={425}
  >
    <Stack gap={smallPadding ? 0 : 'md'}>
      <StylishText size="xl">{titleText}</StylishText>
      <Divider p="xs" />
      {loader && (
        <Group justify="center">
          <Loader />
        </Group>
      )}
      {children}
      {logOff && (
        <>
          <Divider p="xs" />
          <Button onClick={() => doLogout(navigate)} color="red">
            <Trans>Log off</Trans>
          </Button>
        </>
      )}
    </Stack>
  </Paper>
);
}
