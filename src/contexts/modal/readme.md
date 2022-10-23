# React Modal Hook

Make you easily manage your Modal with hooks.

## Usage

### Simple Usage

```tsx

import { createRoot } from 'react-dom'

import {
  Button,
  Dialog as DialogPrimitive,
  DialogActions,
  DialogContent,
  DialogProps as DialogPrimitiveProps,
  DialogTitle,
} from '@mui/material'

const App = () => {
  const [openDialog, closeDialog] = useModal(({ isOpen, onClose, showCloseButton, title, children }) => {
    return (
      <DialogPrimitive open={isOpen} onClose={onClose}>
        <DialogTitle>
          {title}
        </DialogTitle>
        <DialogContent dividers>
          {children}
        </DialogContent>
        <DialogActions>
          {showCloseButton ? (
            <Button onClick={e => onClose?.()} color="primary">
              关闭
            </Button>
          ) : null}
          <Button
            onClick={onConfirm}
            variant="contained"
            color="primary"
            autoFocus
          >
            确认
          </Button>
        </DialogActions>
      </DialogPrimitive>
    );
  }, {
    props: {
      title: '标题',
      children: '内容',
      showCloseButton: true,
    }
  });
}

const root = createRoot(document.getElementById('root')!)

root.render(
  <ModalProvider>
    <App />
  </ModalProvider>
)

```
