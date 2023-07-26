# Glacier File System

This package provides a very simple abstraction around the native ``node:fs`` package to allow in memory file systems to be used. This feature can be especially useful for testing purposes or to run the code inside a browser environment. It is important to note, that this package is not a full-featured monkey-patch for the ``node:fs`` package but rather a slim abstraction that holds only what is necessary for the glacier ecosystem.

## Installation
```shell
npm install @glacier/fs
yarn add @glacier/fs
pnpm install @glacier/fs
```

## Basic Usage
The package provides two implementations of the ``FileSystem`` interface. For normal usage in either a ``posix`` or ``win32`` environment the native adapter can be initialized using the ``createNativeFs`` function. For in memory usage use the ``createMemoryFs`` function.

```typescript
import { createNativeFs } from '@glacier/fs';

const fs = createNativeFs();
fs.exists('/a/b/c')
```

```typescript
import { createMemoryFs } from '@glacier/fs';

const fs = createMemoryFs();
fs.exists('/a/b/c')
```

## Debugging
The ``MemoryFileSystem`` has an additional function call ``toJson`` which enables to convert the current file system to a json representation. This can be helpful to either debug or visual the current state.

```typescript
import { createMemoryFs } from '@glacier/fs';

const fs = createMemoryFs();
fs.writeFile('/a/b/test.txt', Buffer.from('Hello World'))
fs.toJson(); // => { a: { b: { 'test.txt': 'Hello World' } } }
```
