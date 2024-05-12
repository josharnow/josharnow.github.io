'use client';


import React, { useRef, useState, useEffect } from 'react';
import { Dock } from 'primereact/dock';
import { Tooltip } from 'primereact/tooltip';
import { Dialog } from 'primereact/dialog';
import { Terminal } from 'primereact/terminal';
import { TerminalService } from 'primereact/terminalservice';
import { Galleria } from 'primereact/galleria';
import { Toast } from 'primereact/toast';
import { Tree } from 'primereact/tree';
import { Menubar } from 'primereact/menubar';
import { MenuItem } from 'primereact/menuitem';
import { PhotoService, NodeService } from '@/services';
import '@/styles/DockDemo.css';

export default async function AdvanceDemo() {
  const [displayTerminal, setDisplayTerminal] = useState(false);
  const [displayFinder, setDisplayFinder] = useState(false);
  const [images, setImages] = useState(null);
  const [nodes, setNodes] = useState(null);
  const toast = useRef<Toast>(null);
  const toast2 = useRef<Toast>(null);
  const galleria = useRef<Galleria>(null);

  const dockItems = [
    {
      label: 'Finder',
      icon: () => <img alt="Finder" src="https://primefaces.org/cdn/primereact/images/dock/finder.svg" width="100%" />,
      command: () => {
        setDisplayFinder(true);
      }
    },
    {
      label: 'Terminal',
      icon: () => <img alt="Finder" src="https://primefaces.org/cdn/primereact/images/dock/terminal.svg" width="100%" />,
      command: () => {
        setDisplayTerminal(true);
      }
    },
    {
      label: 'App Store',
      icon: () => <img alt="App Store" src="https://primefaces.org/cdn/primereact/images/dock/appstore.svg" width="100%" />,
      command: () => {
        toast2.current.show({ severity: 'error', summary: 'An unexpected error occurred while signing in.', detail: 'UNTRUSTED_CERT_TITLE' });
      }
    },
    {
      label: 'Safari',
      icon: () => <img alt="Finder" src="https://primefaces.org/cdn/primereact/images/dock/safari.svg" width="100%" />,
      command: () => {
        toast2.current.show({ severity: 'warn', summary: 'Safari has stopped working' });
      }
    },
    {
      label: 'Photos',
      icon: () => <img alt="Photos" src="https://primefaces.org/cdn/primereact/images/dock/photos.svg" width="100%" />,
      command: () => {
        galleria.current.show();
      }
    },
    {
      label: 'GitHub',
      icon: () => <img alt="Settings" src="https://primefaces.org/cdn/primereact/images/dock/github.svg" width="100%" />
    },
    {
      label: 'Trash',
      icon: () => <img alt="trash" src="https://primefaces.org/cdn/primereact/images/dock/trash.png" width="100%" />,
      command: () => {
        toast.current.show({ severity: 'info', summary: 'Empty Trash' });
      }
    }
  ];

  const menubarItems: MenuItem[] = [
    {
      label: 'Finder',
      className: 'menubar-root'
    },
    {
      label: 'File',
      items: [
        {
          label: 'New',
          icon: 'pi pi-fw pi-plus',
          items: [
            {
              label: 'Bookmark',
              icon: 'pi pi-fw pi-bookmark'
            },
            {
              label: 'Video',
              icon: 'pi pi-fw pi-video'
            }
          ]
        },
        {
          label: 'Delete',
          icon: 'pi pi-fw pi-trash'
        },
        {
          separator: true
        },
        {
          label: 'Export',
          icon: 'pi pi-fw pi-external-link'
        }
      ]
    },
    {
      label: 'Edit',
      items: [
        {
          label: 'Left',
          icon: 'pi pi-fw pi-align-left'
        },
        {
          label: 'Right',
          icon: 'pi pi-fw pi-align-right'
        },
        {
          label: 'Center',
          icon: 'pi pi-fw pi-align-center'
        },
        {
          label: 'Justify',
          icon: 'pi pi-fw pi-align-justify'
        }
      ]
    },
    {
      label: 'Users',
      items: [
        {
          label: 'New',
          icon: 'pi pi-fw pi-user-plus'
        },
        {
          label: 'Delete',
          icon: 'pi pi-fw pi-user-minus'
        },
        {
          label: 'Search',
          icon: 'pi pi-fw pi-users',
          items: [
            {
              label: 'Filter',
              icon: 'pi pi-fw pi-filter',
              items: [
                {
                  label: 'Print',
                  icon: 'pi pi-fw pi-print'
                }
              ]
            },
            {
              icon: 'pi pi-fw pi-bars',
              label: 'List'
            }
          ]
        }
      ]
    },
    {
      label: 'Events',
      items: [
        {
          label: 'Edit',
          icon: 'pi pi-fw pi-pencil',
          items: [
            {
              label: 'Save',
              icon: 'pi pi-fw pi-calendar-plus'
            },
            {
              label: 'Delete',
              icon: 'pi pi-fw pi-calendar-minus'
            }
          ]
        },
        {
          label: 'Archive',
          icon: 'pi pi-fw pi-calendar-times',
          items: [
            {
              label: 'Remove',
              icon: 'pi pi-fw pi-calendar-minus'
            }
          ]
        }
      ]
    },
    {
      label: 'Quit'
    }
  ];

  const responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 3
    },
    {
      breakpoint: '768px',
      numVisible: 2
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];

  const itemTemplate = (item) => {
    return <img src={ item.itemImageSrc } alt={ item.alt } style={ { width: '100%', display: 'block' } } />;
  };

  const commandHandler = (text: string) => {
    let response;
    let argsIndex = text.indexOf(' ');
    let command = argsIndex !== -1 ? text.substring(0, argsIndex) : text;

    switch (command) {
      case 'date':
        response = 'Today is ' + new Date().toDateString();
        break;

      case 'greet':
        response = 'Hola ' + text.substring(argsIndex + 1) + '!';
        break;

      case 'random':
        response = Math.floor(Math.random() * 100);
        break;

      case 'clear':
        response = null;
        break;

      default:
        response = 'Unknown command: ' + command;
        break;
    }

    if (response) {
      TerminalService.emit('response', response);
    } else {
      TerminalService.emit('clear');
    }
  };

  useEffect(() => {
    TerminalService.on('command', commandHandler);
    PhotoService.getImages();
    NodeService.getTreeNodes();
    // PhotoService.getImages().then((data) => setImages(data));
    // NodeService.getTreeNodes().then((data) => setNodes(data));

    setAppendTo('self');

    return () => {
      TerminalService.off('command', commandHandler);

      // reset
      // setAppendTo(null);
    };
  }, []);

  const start = <i className="pi pi-apple"></i>;
  const end = (
    <React.Fragment>
      <i className="pi pi-video" />
      <i className="pi pi-wifi" />
      <i className="pi pi-volume-up" />
      <span>Fri 13:07</span>
      <i className="pi pi-search" />
      <i className="pi pi-bars" />
    </React.Fragment>
  );

  return (
    <div className="card dock-demo">
      <Tooltip className="dark-tooltip" target=".dock-advanced .p-dock-action" my="center+15 bottom-15" at="center top" showDelay={ 150 } />
      <Menubar model={ menubarItems } start={ start } end={ end } />
      <div className="dock-window dock-advanced">
        <Toast ref={ toast } />
        <Toast ref={ toast2 } position="top-center" />
        <Dock model={ dockItems } />
        <Dialog visible={ displayTerminal } breakpoints={ { '960px': '50vw', '600px': '75vw' } } style={ { width: '30vw' } } onHide={ () => setDisplayTerminal(false) } maximizable blockScroll={ false }>
          <Terminal welcomeMessage="Welcome to PrimeReact (cmd: 'date', 'greet {0}', 'random' and 'clear')" prompt="primereact $" />
        </Dialog>
        <Dialog visible={ displayFinder } breakpoints={ { '960px': '50vw', '600px': '75vw' } } style={ { width: '30vw', height: '18rem' } } onHide={ () => setDisplayFinder(false) } maximizable blockScroll={ false }>
          <Tree value={ nodes } />
        </Dialog>
        <Galleria ref={ galleria } value={ images } responsiveOptions={ responsiveOptions } numVisible={ 2 } style={ { width: '400px' } }
          circular fullScreen showThumbnails={ false } showItemNavigators item={ itemTemplate } />
      </div>
    </div>
  )
}
