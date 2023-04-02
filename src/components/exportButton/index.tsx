import React from 'react';
import FileSaver from 'file-saver';

const ExportButton = () => {
  const downloadCSV = (data: string[], filename: string) => {
    const fileType = 'text/csv;charset=UTF-8';
    const fileExtension = '.csv';
    const csvData = '\uFEFF' + data.join('\n');
    const blob = new Blob([csvData], { type: fileType });
    FileSaver.saveAs(blob, filename + fileExtension);
  };

  return (
    <div>
      <button
        className='bg-[#5EE8D5] w-[200px] h-[100px] rounded-xl'
        onClick={() => {
          downloadCSV(['วัดดูยูมีน', 'วัดร้าง', 'วัดใจ'], 'temples');
        }}
      >
        download
      </button>
    </div>
  );
};

export default ExportButton;
