import React from 'react';
import { Container, Typography, Box, Paper, Divider, Button, Stack, TextField } from '@mui/material';
import { AlertColor } from '@mui/material/Alert';
import {
  PageHeader,
  LoadingIndicator,
  FeedbackMessage,
  StatCard,
  ConfirmDialog,
  EmptyState,
  Breadcrumbs,
  ModalWrapper,
  SearchInput,
  UserAvatar
} from '../../components';

// Icons for examples
import PeopleIcon from '@mui/icons-material/People';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import HomeIcon from '@mui/icons-material/Home';
import PaletteIcon from '@mui/icons-material/Palette';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import AddIcon from '@mui/icons-material/Add';

const ComponentsPage: React.FC = () => {
  // --- State for interactive components --- 
  const [feedback, setFeedback] = React.useState({
    open: false,
    message: '',
    severity: 'info' as AlertColor,
    title: '',
    position: { vertical: 'bottom', horizontal: 'left' } as any, // Type assertion needed temporarily if strict
    autoHideDuration: 6000 as number | null
  });
  const [dialog1Open, setDialog1Open] = React.useState(false);
  const [dialog2Open, setDialog2Open] = React.useState(false);
  const [loadingVisible, setLoadingVisible] = React.useState(false);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleShowFeedback = (options: Partial<typeof feedback>) => {
    setFeedback(prev => ({ ...prev, ...options, open: true }));
  };
  const handleCloseFeedback = () => setFeedback(prev => ({ ...prev, open: false }));

  const handleOpenDialog1 = () => setDialog1Open(true);
  const handleCloseDialog1 = () => setDialog1Open(false);
  const handleConfirmDialog1 = () => { console.log('Dialog 1 Confirmed!'); setDialog1Open(false); };

  const handleOpenDialog2 = () => setDialog2Open(true);
  const handleCloseDialog2 = () => setDialog2Open(false);
  const handleConfirmDialog2 = () => { console.log('Dialog 2 (Delete) Confirmed!'); setDialog2Open(false); };

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);
  const handleModalSubmit = () => { console.log('Modal Submitted!'); setModalOpen(false); };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };
  const handleSearchClear = () => setSearchTerm('');

  const toggleLoading = () => {
    setLoadingVisible(true);
    setTimeout(() => setLoadingVisible(false), 2000);
  }

  // --- Breadcrumb data --- 
  const breadcrumbItems = [
    { label: 'Home', link: '/', icon: <HomeIcon sx={{ mr: 0.5, fontSize: 'inherit' }} /> },
    { label: 'Components', icon: <PaletteIcon sx={{ mr: 0.5, fontSize: 'inherit' }} /> },
  ];

  // --- Component Sections --- 
  const renderSection = (title: string, description: string, element: React.ReactNode) => (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h5" gutterBottom>{title}</Typography>
      <Typography variant="body2" color="text.secondary" paragraph>{description}</Typography>
      <Paper variant="outlined" sx={{ p: 2, mt: 1 }}>
        {element}
      </Paper>
      <Divider sx={{ my: 4 }} />
    </Box>
  );

  return (
    <Container maxWidth="lg"> 
      <PageHeader title="Component Showcase" subtitle="Examples of custom reusable components" />
      <Breadcrumbs items={breadcrumbItems} />
      <Divider sx={{ my: 4 }} />

      {/* --- PageHeader --- */}
      {renderSection(
        'PageHeader',
        'Displays a standard page title and optional subtitle.',
        <Stack spacing={2}>
          <PageHeader title="Header Only" />
          <PageHeader title="Header with Subtitle" subtitle="This provides extra context." />
        </Stack>
      )}

      {/* --- LoadingIndicator --- */}
      {renderSection(
        'LoadingIndicator',
        'Shows a loading spinner, optionally fullscreen or with a custom color/message.',
        <Stack spacing={2} direction="row" alignItems="center">
          <LoadingIndicator />
          <LoadingIndicator color="secondary" message="Processing..." />
          <LoadingIndicator color="success" size={60} />
          <Button onClick={toggleLoading} variant="outlined">Show/Hide Temp</Button>
          {loadingVisible && <LoadingIndicator color="warning" />}
          <Typography variant="caption">Fullscreen: {`<LoadingIndicator fullScreen />`}</Typography>
        </Stack>
      )}

      {/* --- FeedbackMessage --- */}
      {renderSection(
        'FeedbackMessage',
        'Displays messages using Snackbar. Can auto-hide and be positioned.',
        <Stack direction="row" spacing={1} flexWrap="wrap">
          <Button onClick={() => handleShowFeedback({ severity: 'success', message: 'Success message!', title: 'Success', position: { vertical: 'top', horizontal: 'center' } })} color="success" variant="outlined">Success (Top Center)</Button>
          <Button onClick={() => handleShowFeedback({ severity: 'error', message: 'Error message!', title: 'Error', position: { vertical: 'bottom', horizontal: 'right' } })} color="error" variant="outlined">Error (Bottom Right)</Button>
          <Button onClick={() => handleShowFeedback({ severity: 'warning', message: 'Warning message!', title: 'Warning', position: { vertical: 'top', horizontal: 'left' }, autoHideDuration: null })} color="warning" variant="outlined">Warning (No AutoHide)</Button>
          <Button onClick={() => handleShowFeedback({ severity: 'info', message: 'Info message!', title: 'Info', position: { vertical: 'bottom', horizontal: 'center' } })} color="info" variant="outlined">Info (Bottom Center)</Button>
        </Stack>
      )}

      {/* --- StatCard --- */}
      {renderSection(
        'StatCard',
        'A card for displaying key metrics or statistics.',
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
          <StatCard title="Users" value={1024} icon={<PeopleIcon />} color="primary.main" />
          <StatCard title="Revenue" value="$9,876" icon={<AttachMoneyIcon />} color="success.main" />
          <StatCard title="Growth" value="+5%" icon={<ShowChartIcon />} color="warning.main" />
          <StatCard title="Issues" value={3} color="error.main" />
        </Box>
      )}

      {/* --- ConfirmDialog --- */}
      {renderSection(
        'ConfirmDialog',
        'A modal dialog to confirm user actions.',
        <Stack direction="row" spacing={2}>
          <Button onClick={handleOpenDialog1} variant="contained" color="primary">Confirm (Default)</Button>
          <Button onClick={handleOpenDialog2} variant="contained" color="error">Confirm Delete</Button>
        </Stack>
      )}

      {/* --- EmptyState --- */}
      {renderSection(
        'EmptyState',
        'Displayed when there is no data to show.',
        <Stack spacing={3}>
          <EmptyState 
            title="No Items Found"
            description="Try adjusting your filters or creating a new item."
            icon={<ReportProblemIcon fontSize="inherit" />}
            actionButton={<Button variant="contained">Create New Item</Button>}
          />
          <EmptyState 
            title="No Search Results"
            description="Your search did not match any documents."
            icon={<HelpOutlineIcon fontSize="inherit" />}
          />
        </Stack>
      )}

      {/* --- Breadcrumbs --- */}
      {renderSection(
        'Breadcrumbs',
        'Shows navigation hierarchy.',
        <Stack spacing={2}>
          <Breadcrumbs items={[
            { label: 'Level 1', link: '#' },
            { label: 'Level 2', link: '#' },
            { label: 'Current Level' },
          ]} />
          <Breadcrumbs items={[
            { label: 'Home', link: '#', icon: <HomeIcon sx={{ mr: 0.5, fontSize: 'inherit' }} /> },
            { label: 'Settings', link: '#' },
            { label: 'Profile' },
          ]} />
        </Stack>
      )}

      {/* --- SearchInput --- */}
      {renderSection(
        'SearchInput',
        'A standardized search input with clear button.',
        <SearchInput 
          value={searchTerm}
          onChange={handleSearchChange}
          onClear={handleSearchClear}
          sx={{ maxWidth: 400 }}
        />
      )}

      {/* --- UserAvatar --- */}
      {renderSection(
        'UserAvatar',
        'Displays user avatars, falling back to initials with generated colors.',
        <Stack direction="row" spacing={2}>
          <UserAvatar name="Default User" />
          <UserAvatar name="Jane Doe" src="https://example.com/nonexistent.jpg" />
          <UserAvatar name="Agent Smith" sx={{ bgcolor: 'black', color: 'lime' }} />
          <UserAvatar name="Single" />
        </Stack>
      )}

      {/* --- ModalWrapper --- */}
      {renderSection(
        'ModalWrapper',
        'A general-purpose modal dialog wrapper.',
        <Button variant="contained" onClick={handleOpenModal} startIcon={<AddIcon />}>
          Open Generic Modal
        </Button>
      )}

      {/* Snackbar instance for FeedbackMessage examples */}
      <FeedbackMessage {...feedback} onClose={handleCloseFeedback} />

      {/* Dialog instances for ConfirmDialog examples */}
      <ConfirmDialog
        open={dialog1Open}
        title="Confirm Standard Action"
        contentText="Are you sure you want to perform this standard operation?"
        onConfirm={handleConfirmDialog1}
        onCancel={handleCloseDialog1}
      />
      <ConfirmDialog
        open={dialog2Open}
        title="Confirm Deletion"
        contentText="Warning: This action is irreversible. Are you absolutely sure you want to delete this?"
        onConfirm={handleConfirmDialog2}
        onCancel={handleCloseDialog2}
        confirmText="Delete"
        cancelText="Keep"
        confirmButtonColor="error"
      />

      {/* ModalWrapper instance */}
      <ModalWrapper
        open={modalOpen}
        onClose={handleCloseModal}
        title="Create New Item"
        actions={(
          <>
            <Button onClick={handleCloseModal}>Cancel</Button>
            <Button onClick={handleModalSubmit} variant="contained">Submit</Button>
          </>
        )}
      >
        <Typography gutterBottom>
          This is the content area of the modal. You can put forms or any other React nodes here.
        </Typography>
        <TextField 
          autoFocus
          margin="dense" 
          label="Item Name" 
          type="text" 
          fullWidth 
          variant="outlined" 
        />
      </ModalWrapper>
    </Container>
  );
};

export default ComponentsPage; 