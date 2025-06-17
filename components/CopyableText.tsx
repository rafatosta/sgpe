import { HiOutlineClipboardCopy } from 'react-icons/hi';
import { Tooltip } from 'flowbite-react';
import { useState } from 'react';

interface Props {
  text: string;
}

const CopyableText = ({ text }: Props) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <Tooltip content={copied ? 'Copiado!' : 'Copiar'} style="light" placement="top" className='z-40'>
      <div
        onClick={copyToClipboard}
        className="group relative flex items-center gap-1 cursor-pointer select-text"
      >
        <span>{text}</span>
        <HiOutlineClipboardCopy
          className="h-4 w-4 text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        />
      </div>
    </Tooltip>
  );
};

export default CopyableText;
