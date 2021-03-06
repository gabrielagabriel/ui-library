import React, { PureComponent } from 'react'
import { canUseDOM } from 'exenv'
import cc from 'classcat'
import { createGlobalStyle } from 'styled-components'
import KEYCODES from '_utils/keycodes'

const DrawerGlobalStyles = createGlobalStyle`
  .kirk-scroll-lock {
    overflow-y: hidden;
  }
`

export interface DrawerProps {
  readonly children: string | JSX.Element
  readonly className?: Classcat.Class
  readonly innerClassName?: Classcat.Class
  readonly onOpen?: () => void
  readonly onClose?: () => void
  readonly onTransitionEnd?: (open: boolean) => void
  readonly width?: string
  readonly open?: boolean
}

export default class Drawer extends PureComponent<DrawerProps> {
  private contentNode: HTMLDivElement
  static defaultProps: Partial<DrawerProps> = {
    width: '400px',
    onOpen() {},
    onClose() {},
    onTransitionEnd() {},
    open: false,
  }

  componentDidMount() {
    document.addEventListener('mouseup', this.handleOutsideMouseClick)
    document.addEventListener('touchstart', this.handleOutsideMouseClick)
    document.addEventListener('keydown', this.handleKeydown)
  }

  componentDidUpdate(prevProps: DrawerProps) {
    if (this.props.open !== prevProps.open) {
      this.props.open ? this.open() : this.close()
    }
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeydown)
    document.removeEventListener('mouseup', this.handleOutsideMouseClick)
    document.removeEventListener('touchstart', this.handleOutsideMouseClick)
  }

  open = () => {
    this.scrollLock()
    this.props.onOpen()
  }

  close = () => {
    this.scrollUnlock()
    this.props.onClose()
  }

  handleOutsideMouseClick = (e: MouseEvent) => {
    const isButton = e.button && e.button !== 0
    if (!this.contentNode || (e.target as Element).tagName !== 'ASIDE' || isButton) {
      return
    }
    this.close()
  }

  handleKeydown = (e: KeyboardEvent) => {
    if (e.keyCode === KEYCODES.ESCAPE) {
      this.close()
    }
  }

  refContent = (contentNode: HTMLDivElement) => {
    this.contentNode = contentNode
  }

  scrollLock = () => {
    if (canUseDOM) {
      document.documentElement.classList.add('kirk-scroll-lock')
    }
  }

  scrollUnlock = () => {
    if (canUseDOM) {
      document.documentElement.classList.remove('kirk-scroll-lock')
    }
  }

  render() {
    const { open, className, innerClassName, onTransitionEnd, children, width } = this.props
    return (
      <aside
        className={cc([
          'kirk-drawer',
          {
            'kirk-drawer--open': open,
            'kirk-drawer--close': !open,
          },
          className,
        ])}
      >
        <div
          ref={this.refContent}
          className={cc(['kirk-drawer-scrollableContent', innerClassName])}
          style={{ width }}
          onTransitionEnd={() => onTransitionEnd(open)}
        >
          {children}
        </div>
        <DrawerGlobalStyles />
      </aside>
    )
  }
}
