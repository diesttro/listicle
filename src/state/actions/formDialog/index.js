import { OPEN_DIALOG, CLOSE_DIALOG } from '../../types/formDialog';

const openDialog = articleId => ({
  type: OPEN_DIALOG,
  payload: { articleId },
});

const closeDialog = () => ({
  type: CLOSE_DIALOG,
});

export { openDialog, closeDialog };
