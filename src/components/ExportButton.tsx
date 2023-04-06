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
        className='bg-[#c30c0c] w-[200px] h-[100px] rounded-xl'
        onClick={() => {
          downloadCSV('templesList');
        }}
      >
        download
      </button>
    </div>
  );
};

export default ExportButton;
