import useTemple from '@/hooks/useTemple';
import FileSaver from 'file-saver';

const ExportButton = () => {
  const { provinces } = useTemple();

  const downloadCSV = (filename: string) => {
    let data: string[] = [];
    provinces?.map((p) => {
      data = data.concat(p.data);
    });
    const fileType = 'text/csv;charset=UTF-8';
    const fileExtension = '.csv';
    const csvData = '\uFEFF' + data.join('\n');
    const blob = new Blob([csvData], { type: fileType });
    FileSaver.saveAs(blob, filename + fileExtension);
  };

  return (
    <div>
      <button
        className='bg-teal-300 rounded-lg px-6 py-2 text-bg sukhumvit-bold hover:bg-teal-400 active:bg-teal-300'
        onClick={() => {
          downloadCSV('templesList');
        }}
      >
        Export to CSV
      </button>
    </div>
  );
};

export default ExportButton;
