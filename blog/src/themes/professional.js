export default {
  colorTone: 'cool',
  colors: {
    red: '#fa486b',
  },
  overrides: {
    MuiAppBar: {      
      colorPrimary: {
        backgroundColor: '#05386b',        
      },      
    }, 
    MuiDrawer: {
      paper: {
        backgroundColor: '#379683',        
      },
    },
    MuiDivider: {
      root: {
        backgroundColor: '#fff'
      }
    },
    MuiBottomNavigation: {
      root: {
        height: 40,
        backgroundColor: '#05386b',
        justifyContent: 'space-between',
        color: '#fff'
      }
    },
    MuiPopover:{
      paper: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: '#edf5e1',        
        '& > ul > li': {
          color: '#000'
        }
      }
    },
    AccountDialog: {
      dialogHeadingText: {
        color: '#000'
      },
      dialogText: {
        color: '#000'
      },
      button: {        
        backgroundColor: '#05386b',
        color: '#fff',
        '&:hover':{
          backgroundColor: '#8ee4af',
        },
        '& > span > a': {
          color: '#fff'
        }
      },
    },    
    BlogCard: {
      panelBtn: {
        backgroundColor: '#edf5e1'
      },
      card: {
        backgroundColor: '#edf5e1',
        marginBottom: 20,            
      },
      cardHeader: {
        color: '#000',
        '&:hover': {
          textDecoration: 'underline',
          cursor: 'default'
        }
      },
      cardSummary: {
        color: '#000'
      },
      bodyText:{
        color: '#000'
      },
      expand: {
        color: '#000'
      },
      cardBtn: {
        color: '#fff',
        backgroundColor: '#05386b',
        '&:hover':{
          backgroundColor: '#8ee4af'
        },
      },      
    },
    Panel: {
      root: {
        backgroundColor: '#edf5e1',        
      },
      headerText: {
        color: '#000'
      },
      subText: { 
        color: '#000'
      }
    },
    TopBlogPosts: {
      panelCard:{
        backgroundColor: '#05386b', 
        color: '#fff',
        '& > div > a > Button': {
          backgroundColor: '#8ee4af',
          color: '#fff',
          '&:hover':{
            backgroundColor: '#F9A905'
          }
        }
      }
    },
    TopCommentersTable: {
      table: {
        backgroundColor: '#edf5e1'
      }
    },
    Row: {
      rowText: {
        color: '#000'
      },
    },
    MuiGridListTileBar: {
      titleWrap: {
        color: '#fff'
      },      
    },
    PostGrid: {
      tileBar: {
        backgroundColor: '#05386b',        
        '& > div > button' :{
          color: '#fff',
          backgroundColor: '#8ee4af',
          '&:hover': {
            backgroundColor: '#edf5e1',
            color: '#000'
          },
        },
      }
    },
    AddContentButton:{
      button: {
        backgroundColor: '#379683',
        color: '#fff',
        '&:hover':{
          backgroundColor: '#05386b',          
        }
      }
    },
    DashboardContentBottom: {
      root: {
        backgroundColor: '#edf5e1',        
      },
      panelCard: {
        backgroundColor: '#05386b',        
      }, 
    },
    MuiExpansionPanelSummary: {
      expandIcon:{
        color: '#000',
        '&:hover':{
          backgroundColor: '#05386b',
          color: '#fff'
        }
      },
      expanded: {
        backgroundColor: '#05386b',
        '&:active': {
          backgroundColor: '#05386b',
        },
        '& > div > div > h2': {
          color: '#fff'
        },
        '& > div > div > p': {
          color: '#fff'
        },
      }
    },
    CommentContainer:{
      paper:{
        backgroundColor: '#edf5e1',
        '& > h3':{
          color: '#000'
        },
        '& > p':{
          color: '#000'
        }
      }
    },
    MuiTooltip: {
      popper: {
        display: 'none'
      }
    },
    DropdownMenu:{
      menuItem:{
        color: '#fff'
      }
    },
    ThemeChanger: {
      menuItem: {
        color: '#fff'
      }
    },
    GuestDashboard: {
      button: {
        backgroundColor: '#05386b',
        color: '#fff',
        '&:hover':{
          backgroundColor: '#8ee4af'
        },
        '& > span > a':{
          color: '#fff',
        }
      }
    },
    MuiIconButton: {
      root: {
        '&:hover': {
          backgroundColor: '#82B7AF',          
        },
      },
    },
    MuiListItem: {
      button: {
        '&:hover': {
          backgroundColor: '#8ee4af',
          color: '#fff'
        },
      },
    },
    MuiModal: {
      root: {
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        zIndex: 1300,
        position: 'fixed',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }
    },
    AddCommentModal: {
      modalPaper: {
        backgroundColor: '#edf5e1'
      },
      commentButton: {
        backgroundColor: '#05386b',
        color: '#fff',
        '&:hover': {
          backgroundColor: '#379683'
        }
      },
    },
    AddPostModal: {
      modalPaper: {
        backgroundColor: '#edf5e1'
      },
      postButton: {
        backgroundColor: '#05386b',
        color: '#fff',
        '&:hover': {
          backgroundColor: '#379683'
        }
      }
    },
    MuiInput:{
      underline:{
        '&:before':{
          backgroundColor: '#379683'
        }
      }
    },
    MuiFormLabel: {
      root: {
        color: '#379683'
      },
    }
  },
};

