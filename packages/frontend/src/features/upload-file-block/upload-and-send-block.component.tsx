import React from 'react'
import { Input } from '../../shared/ui/input/input.component'
import { Button } from '../../shared/ui/button/button.component'

export const UploadFileBLock:React.FC = () => {

    interface ExtendedRequestInit extends RequestInit {
        duplex?: 'half';
    }
    const fileInputRef = React.useRef<HTMLInputElement>()

    const handleUpload = async (fileInputRef: React.MutableRefObject<HTMLInputElement>) => {
        if(!fileInputRef.current) return

        const file = fileInputRef.current.files![0];

        if (!file) return;
    
        const fileStream = file.stream();
        const reader = fileStream.getReader();
    
        const stream = new ReadableStream({
          start(controller) {
            function push() {
              reader.read().then(({ done, value }) => {
                if (done) {
                  controller.close();
                  return;
                }
                controller.enqueue(value);
                push();
              });
            }
            push();
          }
        })
    
        try {
            const response = await fetch('http://localhost:8080/upload', {
              method: 'POST',
              headers: {
                'Content-Type': file.type,
              },
              body: stream,
              duplex: 'half'
            } as ExtendedRequestInit);
      
            if (response.ok) {
              console.log('Uploaded');
            } else {
              console.error('Error:', response.status);
            }
          } catch (error) {
            console.error('Error:', error);
          }
    }
    
    return <div>
        <Input inputRef={fileInputRef as React.MutableRefObject<HTMLInputElement>}/>
        <Button text='Upload' onClick={() => {handleUpload(fileInputRef as React.MutableRefObject<HTMLInputElement>)}}/>
    </div>
    
}
