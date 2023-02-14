import React from 'react';
import {
  FiAlertCircle,
  FiCalendar,
  FiCheckCircle,
  FiChevronDown,
  FiChevronLeft,
  FiChevronRight,
  FiChevronUp,
  FiEye,
  FiEyeOff,
  FiHardDrive,
  FiLoader,
  FiUploadCloud,
  FiUser,
  FiVolume2,
  FiX,
  FiXCircle,
} from 'react-icons/fi';

import { IoMdCloseCircle } from 'react-icons/io';

export const InfoIcon = (props: any) => <FiVolume2 {...props} />;
export const LoadingIcon = (props: any) => <FiLoader {...props} />;
export const SuccessIcon = (props: any) => <FiCheckCircle {...props} />;
export const ErrorIcon = (props: any) => <FiXCircle {...props} />;
export const WarningIcon = (props: any) => <FiAlertCircle {...props} />;
export const CloseIcon = (props: any) => <FiX {...props} />;
export const UpIcon = (props: any) => <FiChevronUp {...props} />;
export const DownIcon = (props: any) => <FiChevronDown {...props} />;
export const ArrowRightIcon = (props: any) => <FiChevronRight {...props} />;
export const ArrowLeftIcon = (props: any) => <FiChevronLeft {...props} />;
export const FileUploadIcon = (props: any) => <FiUploadCloud {...props} />;
export const CalendarIcon = (props: any) => <FiCalendar {...props} />;
export const CloseCircleIcon = (props: any) => <IoMdCloseCircle {...props} />;
export const EmptyIcon = (props: any) => <FiHardDrive {...props} />;
export const UserIcon = (props: any) => <FiUser {...props} />;
export const PasswordShowIcon = (props: any) => <FiEye {...props} />;
export const PasswordHideIcon = (props: any) => <FiEyeOff {...props} />;
