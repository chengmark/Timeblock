export const toRem = (px:number):number => px / 16

const Layout = {
  calendarScreen: {
    header: 64,
    dayLabels: 32,
    footer: 48,
  },
  schedulerScreen: {
    messageInput: 24,
  },
  createScreen: {
    title: 48,
    field: 24,
    fieldMarginY: 8,
    sectionMarginTop: 24,
  },
  messageInput: 24,
  field: 24,
  statusbar: 20
}

export default Layout
