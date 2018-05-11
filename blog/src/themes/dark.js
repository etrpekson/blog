export default {
  coolTone: "warm",
  colors: {
    red: "#7b0e1e"
  },
  overrides: {
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: "#18121e"
      }
    },
    MuiDrawer: {
      paper: {
        backgroundColor: "#233237"
      }
    },
    MuiDivider: {
      root: {
        backgroundColor: "#fff"
      }
    },
    MuiBottomNavigation: {
      root: {
        height: 40,
        backgroundColor: "#18121e",
        justifyContent: "space-between",
        color: "#fff"
      }
    },
    MuiPopover: {
      paper: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        backgroundColor: "#233237",
        color: "#fff"
      }
    },
    AccountDialog: {
      dialogHeadingText: {
        color: "#fff"
      },
      dialogText: {
        color: "#fff"
      },
      button: {
        backgroundColor: "#984b43",
        color: "#fff",
        "&:hover": {
          backgroundColor: "#18121e"
        },
        "& > span > a": {
          color: "#fff"
        }
      }
    },
    BlogCard: {
      card: {
        backgroundColor: "#233237",
        marginBottom: 20
      },
      cardHeader: {
        color: "#fff",
        "&:hover": {
          textDecoration: "underline",
          cursor: "default"
        }
      },
      cardSummary: {
        color: "#fff"
      },
      bodyText: {
        color: "#fff"
      },
      expand: {
        color: "#fff"
      },
      cardBtn: {
        color: "#fff",
        backgroundColor: "#984b43",
        "&:hover": {
          backgroundColor: "#18121e"
        }
      }
    },
    Panel: {
      root: {
        backgroundColor: "#233237"
      },
      headerText: {
        color: "#fff"
      },
      subText: {
        color: "#fff"
      }
    },
    TopBlogPosts: {
      panelCard: {
        backgroundColor: "#984b43",
        "& > div > a > Button": {
          backgroundColor: "#233237",
          color: "#fff"
        }
      }
    },
    TopCommentersTable: {
      table: {
        backgroundColor: "#233237"
      }
    },
    Row: {
      rowText: {
        color: "#fff"
      }
    },
    PostGrid: {
      tileBar: {
        backgroundColor: "#233237",
        "& > div > button": {
          color: "#fff",
          backgroundColor: "#984b43",
          "&:hover": {
            backgroundColor: "#18121e"
          }
        }
      }
    },
    AddContentButton: {
      button: {
        backgroundColor: "#984b43",
        color: "#fff",
        "&:hover": {
          backgroundColor: "#18121e"
        }
      }
    },
    DashboardContentBottom: {
      root: {
        backgroundColor: "#233237"
      }
    },
    MuiExpansionPanelSummary: {
      expandIcon: {
        color: "#fff",
        "&:hover": {
          backgroundColor: "#984b43"
        }
      },
      expanded: {
        backgroundColor: "#18121e",
        "&:active": {
          backgroundColor: "#18121e"
        }
      }
    },
    CommentContainer: {
      paper: {
        backgroundColor: "#233237",
        "& > h3": {
          color: "#fff"
        },
        "& > p": {
          color: "#fff"
        }
      }
    },
    MuiTooltip: {
      popper: {
        display: "none"
      }
    },
    DropdownMenu: {
      menuItem: {
        color: "#fff"
      }
    },
    ThemeChanger: {
      menuItem: {
        color: "#fff"
      }
    },
    GuestDashboard: {
      button: {
        backgroundColor: "#984b43",
        color: "#fff",
        "&:hover": {
          backgroundColor: "#233237"
        },
        "& > span > a": {
          color: "#fff"
        }
      }
    },
    MuiIconButton: {
      root: {
        "&:hover": {
          backgroundColor: "#453D4E"
        }
      }
    },
    MuiListItem: {
      button: {
        "&:hover": {
          backgroundColor: "#984b43",
          color: "white"
        }
      }
    },
    MuiModal: {
      root: {
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        zIndex: 1300,
        position: "fixed",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }
    },
    AddCommentModal: {
      commentButton: {
        backgroundColor: "#984b43",
        color: "#fff",
        "&:hover": {
          backgroundColor: "#233237"
        }
      }
    },
    AddPostModal: {
      postButton: {
        backgroundColor: "#984b43",
        color: "#fff",
        "&:hover": {
          backgroundColor: "#233237"
        }
      }
    },
    MuiInput: {
      underline: {
        "&:before": {
          backgroundColor: "#984b43"
        },
        "&:after": {
          backgroundColor: "#984b43"
        }
      }
    }
  }
};
