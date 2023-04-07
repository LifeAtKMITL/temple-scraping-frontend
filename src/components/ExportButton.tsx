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
        className='bg-[#5EE8D5] rounded-lg px-6 py-2 text-bg font-semibold'
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
