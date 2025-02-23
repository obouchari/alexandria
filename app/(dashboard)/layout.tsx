import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { Icon } from "@iconify/react";

import {
  Dropdown,
  DropdownButton,
  DropdownDivider,
  DropdownItem,
  DropdownLabel,
  DropdownMenu,
} from "~/components/common/dropdown";
import {
  Navbar,
  NavbarItem,
  NavbarSection,
  NavbarSpacer,
} from "~/components/common/navbar";
import {
  Sidebar,
  SidebarBody,
  SidebarFooter,
  SidebarHeader,
  SidebarHeading,
  SidebarItem,
  SidebarLabel,
  SidebarSection,
  SidebarSpacer,
} from "~/components/common/sidebar";
import { SidebarLayout } from "~/components/common/sidebar-layout";
// import {
//   ArrowRightStartOnRectangleIcon,
//   ChevronDownIcon,
//   ChevronUpIcon,
//   Cog8ToothIcon,
//   LightBulbIcon,
//   PlusIcon,
//   ShieldCheckIcon,
//   UserIcon,
// } from "@heroicons/react/16/solid";
// import {
//   Cog6ToothIcon,
//   HomeIcon,
//   InboxIcon,
//   MagnifyingGlassIcon,
//   MegaphoneIcon,
//   QuestionMarkCircleIcon,
//   SparklesIcon,
//   Square2StackIcon,
//   TicketIcon,
// } from "@heroicons/react/20/solid";
import { Avatar } from "~/components/common/avatar";
import { auth } from "~/lib/auth";

export default async function DashboardLayout() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login");
  }

  return (
    <SidebarLayout
      navbar={
        <Navbar>
          <NavbarSpacer />
          <NavbarSection>
            <NavbarItem href="/search" aria-label="Search">
              {/* <MagnifyingGlassIcon /> */}
              <Icon icon="MagnifyingGlassIcon" />
            </NavbarItem>
            <NavbarItem href="/inbox" aria-label="Inbox">
              {/* <InboxIcon /> */}
              <Icon icon="InboxIcon" />
            </NavbarItem>
            <Dropdown>
              <DropdownButton as={NavbarItem}>
                <Avatar src="/profile-photo.jpg" square />
              </DropdownButton>
              <DropdownMenu className="min-w-64" anchor="bottom end">
                <DropdownItem href="/my-profile">
                  {/* <UserIcon /> */}
                  <Icon icon="UserIcon" />
                  <DropdownLabel>My profile</DropdownLabel>
                </DropdownItem>
                <DropdownItem href="/settings">
                  {/* <Cog8ToothIcon /> */}
                  <Icon icon="Cog8ToothIcon" />
                  <DropdownLabel>Settings</DropdownLabel>
                </DropdownItem>
                <DropdownDivider />
                <DropdownItem href="/privacy-policy">
                  {/* <ShieldCheckIcon /> */}
                  <Icon icon="ShieldCheckIcon" />
                  <DropdownLabel>Privacy policy</DropdownLabel>
                </DropdownItem>
                <DropdownItem href="/share-feedback">
                  {/* <LightBulbIcon /> */}
                  <Icon icon="LightBulbIcon" />
                  <DropdownLabel>Share feedback</DropdownLabel>
                </DropdownItem>
                <DropdownDivider />
                <DropdownItem href="/logout">
                  {/* <ArrowRightStartOnRectangleIcon /> */}
                  <Icon icon="ArrowRightStartOnRectangleIcon" />
                  <DropdownLabel>Sign out</DropdownLabel>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarSection>
        </Navbar>
      }
      sidebar={
        <Sidebar>
          <SidebarHeader>
            <div>
              <Avatar src="/tailwind-logo.svg" />
              <SidebarLabel>Tailwind Labs</SidebarLabel>
            </div>

            <SidebarSection className="max-lg:hidden">
              <SidebarItem href="/search">
                {/* <MagnifyingGlassIcon /> */}
                <Icon icon="MagnifyingGlassIcon" />
                <SidebarLabel>Search</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="/inbox">
                {/* <InboxIcon /> */}
                <Icon icon="InboxIcon" />
                <SidebarLabel>Inbox</SidebarLabel>
              </SidebarItem>
            </SidebarSection>
          </SidebarHeader>
          <SidebarBody>
            <SidebarSection>
              <SidebarItem href="/">
                {/* <HomeIcon /> */}
                <Icon icon="HomeIcon" />
                <SidebarLabel>Home</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="/events">
                {/* <Square2StackIcon /> */}
                <Icon icon="Square2StackIcon" />
                <SidebarLabel>Events</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="/orders">
                {/* <TicketIcon /> */}
                <Icon icon="TicketIcon" />
                <SidebarLabel>Orders</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="/settings">
                {/* <Cog6ToothIcon /> */}
                <Icon icon="Cog6ToothIcon" />
                <SidebarLabel>Settings</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="/broadcasts">
                {/* <MegaphoneIcon /> */}
                <Icon icon="MegaphoneIcon" />
                <SidebarLabel>Broadcasts</SidebarLabel>
              </SidebarItem>
            </SidebarSection>
            <SidebarSection className="max-lg:hidden">
              <SidebarHeading>Upcoming Events</SidebarHeading>
              <SidebarItem href="/events/1">
                Bear Hug: Live in Concert
              </SidebarItem>
              <SidebarItem href="/events/2">Viking People</SidebarItem>
              <SidebarItem href="/events/3">Six Fingers — DJ Set</SidebarItem>
              <SidebarItem href="/events/4">We All Look The Same</SidebarItem>
            </SidebarSection>
            <SidebarSpacer />
            <SidebarSection>
              <SidebarItem href="/support">
                {/* <QuestionMarkCircleIcon /> */}
                <Icon icon="QuestionMarkCircleIcon" />
                <SidebarLabel>Support</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="/changelog">
                {/* <SparklesIcon /> */}
                <Icon icon="SparklesIcon" />
                <SidebarLabel>Changelog</SidebarLabel>
              </SidebarItem>
            </SidebarSection>
          </SidebarBody>
          <SidebarFooter className="max-lg:hidden">
            <Dropdown>
              <DropdownButton as={SidebarItem}>
                <span className="flex min-w-0 items-center gap-3">
                  <Avatar
                    src="/profile-photo.jpg"
                    className="size-10"
                    square
                    alt=""
                  />
                  <span className="min-w-0">
                    <span className="block truncate text-sm/5 font-medium text-zinc-950 dark:text-white">
                      Erica
                    </span>
                    <span className="block truncate text-xs/5 font-normal text-zinc-500 dark:text-zinc-400">
                      erica@example.com
                    </span>
                  </span>
                </span>
                {/* <ChevronUpIcon /> */}
                <Icon icon="ChevronUpIcon" />
              </DropdownButton>
              <DropdownMenu className="min-w-64" anchor="top start">
                <DropdownItem href="/my-profile">
                  {/* <UserIcon /> */}
                  <Icon icon="UserIcon" />
                  <DropdownLabel>My profile</DropdownLabel>
                </DropdownItem>
                <DropdownItem href="/settings">
                  {/* <Cog8ToothIcon /> */}
                  <Icon icon="Cog8ToothIcon" />
                  <DropdownLabel>Settings</DropdownLabel>
                </DropdownItem>
                <DropdownDivider />
                <DropdownItem href="/privacy-policy">
                  {/* <ShieldCheckIcon /> */}
                  <Icon icon="ShieldCheckIcon" />
                  <DropdownLabel>Privacy policy</DropdownLabel>
                </DropdownItem>
                <DropdownItem href="/share-feedback">
                  {/* <LightBulbIcon /> */}
                  <Icon icon="LightBulbIcon" />
                  <DropdownLabel>Share feedback</DropdownLabel>
                </DropdownItem>
                <DropdownDivider />
                <DropdownItem href="/logout">
                  {/* <ArrowRightStartOnRectangleIcon /> */}
                  <Icon icon="ArrowRightStartOnRectangleIcon" />
                  <DropdownLabel>Sign out</DropdownLabel>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </SidebarFooter>
        </Sidebar>
      }
    >
      {/* The page content */}
    </SidebarLayout>
  );
}
