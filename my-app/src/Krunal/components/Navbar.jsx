import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';
import Logo from "../images/logo.svg"

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}>


        <Flex flex={{ base: 1 }} justify={{ base: 'start', md: 'start' }}>
          <Text
            textAlign={useBreakpointValue({ base: 'start', md: 'left' })}
            fontFamily={'heading'}
            ml={{base:0,md:0,lg:150}}
            color={useColorModeValue('gray.800', 'white')}>
                <img src={Logo} alt="Logo"  />
          </Text>

          <Flex display={{ base: 'none', md: 'flex' }} ml={20}>
            <DesktopNav />
          </Flex>
        </Flex>

        
        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}>

          <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          justify={'flex-end'}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex> 

        </Stack>

      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? '#'}
                fontSize={'sm'}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}>
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}>
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
      <Button>sjfb</Button>
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, icon }) => {
  return (
    <Link
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
      <Stack direction={'row'} align={'center'}>
        <Box display="flex" gap="5">
            <Text fontSize={'sm'}>{icon}</Text>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'pink.400' }}
            fontWeight={500}>
            {label}
          </Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}>
          <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}>
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};



const NAV_ITEMS = [
  {
    label: 'Features',
    children: [
      {
        label: 'Productivity tracking',
        icon: 'icon',
        href: '#',
      },
      {
        label: 'Automatic time tracking',
        icon: 'icon',
        href: '#',
      },
      {
        label: 'Reporting',
        icon: 'icon',
        href: '#',
      },
      {
        label: 'Timesheet approvals',
        icon: 'icon',
        href: '#',
      },
      {
        label: 'Invoicing',
        icon: 'icon',
        href: '#',
      },
      {
        label: 'Billing rates and budgeting',
        icon: 'icon',
        href: '#',
      },
      {
        label: 'Attendance',
        icon: 'icon',
        href: '#',
      },
    ],
  },
  {
    label: 'Pricing',
    href: '#',
  },
  {
    label: 'Integrations',
    children: [
      {
        label: 'Trello',
        icon: 'icon',
        href: '#',
      },
      {
        label: 'Google Calender',
        icon: 'icon',
        href: '#',
      },
      {
        label: 'iCal',
        icon: 'icon',
        href: '#',
      },
      {
        label: 'Asana',
        icon: 'icon',
        href: '#',
      },
      {
        label: 'Monday.com',
        icon: 'icon',
        href: '#',
      },
      {
        label: 'Jira',
        icon: 'icon',
        href: '#',
      },
      {
        label: 'All integrations',
        icon: 'icon',
        href: '#',
      }
    ],
  },
  
  {
    label: 'Blog',
    href: '#',
  },
  {
    label: 'Book a Demo',
    href: '#',
  },
  {
    label: 'Sign in',
    href: '#',
  },
];