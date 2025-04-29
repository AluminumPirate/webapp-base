import React from 'react';

export interface EmptyStateProps {
  icon?: React.ReactElement; // e.g., <InfoIcon />
  title: string;
  description?: string;
  actionButton?: React.ReactElement; // e.g., <Button>Create New</Button>
} 