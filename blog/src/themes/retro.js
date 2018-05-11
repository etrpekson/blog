export default {
  colorTone: "cool",
  colors: {
    red: "#fa486b"
  },
  overrides: {
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: "#FEDC3D",
        color: "#000"
      }
    },
    MuiDrawer: {
      paper: {
        backgroundColor: "#2F2F2F"
      }
    },
    MuiBottomNavigation: {
      root: {
        height: 40,
        backgroundColor: "#FEDC3D",
        justifyContent: "space-between",
        color: "#000"
      }
    },
    MuiPopover: {
      paper: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        backgroundColor: "#2F2F2F",
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
        backgroundColor: "#FEDC3D",
        color: "#000",
        "&:hover": {
          backgroundColor: "#18121e",
          color: "#fff"
        },
        "& > span > a": {
          color: "#000",
          "&:hover": {
            color: "#fff"
          }
        }
      }
    },
    BlogCard: {
      card: {
        backgroundColor: "#000",
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
        color: "#000",
        backgroundColor: "#FEDC3D",
        "&:hover": {
          backgroundColor: "#2F2F2F",
          color: "#fff"
        }
      }
    },
    Panel: {
      root: {
        backgroundColor: "#000"
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
        backgroundColor: "#2F2F2F",
        color: "#fff",
        "& > div > a > Button": {
          backgroundColor: "#FEDC3D",
          color: "#000",
          "&:hover": {
            backgroundColor: "#000"
          }
        }
      }
    },
    TopCommentersTable: {
      table: {
        backgroundColor: "#000"
      }
    },
    Row: {
      rowText: {
        color: "#fff"
      }
    },
    PostGrid: {
      tileBar: {
        backgroundColor: "#000",
        "& > div > button": {
          color: "#000",
          backgroundColor: "#FEDC3D",
          "&:hover": {
            backgroundColor: "#2F2F2F",
            color: "#fff"
          }
        }
      }
    },
    AddContentButton: {
      button: {
        backgroundColor: "#FEDC3D",
        color: "#000",
        "&:hover": {
          backgroundColor: "#000",
          color: "#fff"
        }
      }
    },
    DashboardContentBottom: {
      root: {
        backgroundColor: "#000"
      }
    },
    MuiExpansionPanelSummary: {
      expandIcon: {
        color: "#fff",
        "&:hover": {
          backgroundColor: "#FEDC3D",
          color: "#000"
        }
      },
      expanded: {
        backgroundColor: "#FEDC3D",
        "&:active": {
          backgroundColor: "#FEDC3D"
        },
        "& > div > div > h2": {
          color: "#000"
        },
        "& > div > div > p": {
          color: "#000"
        }
      }
    },
    CommentContainer: {
      paper: {
        backgroundColor: "#2F2F2F",
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
        backgroundColor: "#2F2F2F",
        color: "#fff",
        "&:hover": {
          backgroundColor: "#FEDC3D",
          color: "#000"
        },
        "& > span > a": {
          color: "#fff",
          "&:hover": {
            color: "#000"
          }
        }
      }
    },
    MuiIconButton: {
      root: {
        "&:hover": {
          backgroundColor: "#FFE156"
        }
      }
    },
    MuiListItem: {
      button: {
        "&:hover": {
          backgroundColor: "#FEDC3D",
          color: "#000"
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
        backgroundColor: "#FEDC3D",
        color: "#000",
        "&:hover": {
          backgroundColor: "#000",
          color: "#fff"
        }
      }
    },
    AddPostModal: {
      postButton: {
        backgroundColor: "#FEDC3D",
        color: "#000",
        "&:hover": {
          backgroundColor: "#000",
          color: "#fff"
        }
      }
    },
    MuiInput: {
      underline: {
        "&:before": {
          backgroundColor: "#FEDC3D"
        },
        "&:after": {
          backgroundColor: "#000"
        }
      }
    }
  }
};
