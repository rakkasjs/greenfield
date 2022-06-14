import { MantineProvider } from "@mantine/core";
import { LayoutProps } from "rakkasjs";

export default function MainLayout({ children }: LayoutProps) {
  return (
    <MantineProvider theme={{ primaryColor: "green" }}>
      {children}
    </MantineProvider>
  );
}
