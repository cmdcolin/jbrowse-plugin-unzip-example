import React, { useState, useEffect } from 'react'
import { openLocation } from '@jbrowse/core/util/io'
import { unzip } from '@gmod/bgzf-filehandle'

export default function ReactComponent() {
  const [pushed, setPushed] = useState('')
  useEffect(() => {
    ;(async () => {
      try {
        const res = await openLocation({
          uri: 'test_data/simple.vcf.gz',
          locationType: 'UriLocation',
        }).readFile()

        console.log({ res })
        const r = await unzip(res)
        console.log({ r }, r.toString())
      } catch (e) {
        console.error(e)
      }
    })()
  }, [])
  return (
    <div style={{ padding: 50 }}>
      <h1>Hello plugin developers!</h1>
      <button
        onClick={() => {
          setPushed('Whoa! You pushed the button!')
        }}
      >
        Push the button
      </button>
      <p>{pushed}</p>
    </div>
  )
}
