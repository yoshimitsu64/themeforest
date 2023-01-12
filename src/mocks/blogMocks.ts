import { IBlog } from 'appTypes/index';
import Image1 from 'assets/images/blog/blogCard1.png';
import Image2 from 'assets/images/blog/blogCard2.png';
import Image3 from 'assets/images/blog/blogCard3.png';

export const blogInfo: Array<IBlog> = [
  {
    id: 'blog-1',
    imageURL: Image1,
    title: 'ISO 13485 compliance of medical devices',
    author: 'Ilya Averkov',
    date: '22 June 2022',
    tags: ['ISO', 'Science', 'Medical'],
    text:
      '<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis' +
      ' praesentium voluptatum deleniti atque corrupti quos dolores et quas. Nulla rhoncus' +
      ' consectetur eros non iaculis <em>“Vivamus lectus enim, convallis nec dapibus vel, semper' +
      ' id ante. Morbi pulvinar sapien nulla, eu dignissim enim ullamcorper vitae”.</em></p><p>Ut' +
      ' sit amet neque vel mauris consequat aliquam at in arcu. Ut vulputate, augue luctus dignissim' +
      ' pretium, elit magna placerat elit, at venenatis lacus arcu eget quam. Fusce nec cursus mi,' +
      ' sed <strong>blandit</strong>.</p><p>Phasellus tristique eu nisl eu consectetur. Morbi urna massa,' +
      ' imperdiet in mauris et, euismod vestibulum lacus. Integer enim elit, tincidunt aliq uam ligula id,' +
      ' lacinia auctor orci. Sed quis lobortis eros. Fusce id commodo libero. Praesent mollis velit ac' +
      ' accumsan ultrices. Ut convallis ipsum pulvinar ante maximus suscipit.</p><blockquote>“Morbi urna massa,' +
      ' imperdiet in mauris et, euismod vestibulum lacus. Integer enim elit, tincidunt aliquam ligula id,' +
      ' lacinia auctor orci. Sed quis lobortis eros. Fusce id commodo libero”</blockquote><p>Mauris purus diam,' +
      ' iaculis non leo nec, ultricies fringilla odio. Fusce feugiat elit facilisis volutpat venenatis.' +
      ' <b>Vestibulum tempor ligula vel orci consectetur, eu euismod augue bibendum. In volutpat libero velit,' +
      ' et mattis tortor placerat eget.</b> Ut nec aliquam urna, et varius massa. Praesent eu nisl ac ex maximus' +
      ' iaculis. Sed placerat, ligula vel tempor pellentesque, odio ipsum lobortis orci, sit amet fermentum ex nunc ac diam.</p>',
    partOfText:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium' +
      ' voluptatum deleniti atque corrupti quos dolores et quas. Quis autem vel eum iure...',
    views: 26,
  },
  {
    id: 'blog-2',
    imageURL: Image2,
    title: 'Business analysis helps you  in finance',
    author: 'Ilya Averkov',
    date: '22 June 2022',
    tags: ['ISO', 'Science'],
    text:
      '<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis' +
      ' praesentium voluptatum deleniti atque corrupti quos dolores et quas. Nulla rhoncus' +
      ' consectetur eros non iaculis <em>“Vivamus lectus enim, convallis nec dapibus vel, semper' +
      ' id ante. Morbi pulvinar sapien nulla, eu dignissim enim ullamcorper vitae”.</em></p><p>Ut' +
      ' sit amet neque vel mauris consequat aliquam at in arcu. Ut vulputate, augue luctus dignissim' +
      ' pretium, elit magna placerat elit, at venenatis lacus arcu eget quam. Fusce nec cursus mi,' +
      ' sed <strong>blandit</strong>.</p><p>Phasellus tristique eu nisl eu consectetur. Morbi urna massa,' +
      ' imperdiet in mauris et, euismod vestibulum lacus. Integer enim elit, tincidunt aliq uam ligula id,' +
      ' lacinia auctor orci. Sed quis lobortis eros. Fusce id commodo libero. Praesent mollis velit ac' +
      ' accumsan ultrices. Ut convallis ipsum pulvinar ante maximus suscipit.</p><blockquote>“Morbi urna massa,' +
      ' imperdiet in mauris et, euismod vestibulum lacus. Integer enim elit, tincidunt aliquam ligula id,' +
      ' lacinia auctor orci. Sed quis lobortis eros. Fusce id commodo libero”</blockquote><p>Mauris purus diam,' +
      ' iaculis non leo nec, ultricies fringilla odio. Fusce feugiat elit facilisis volutpat venenatis.' +
      ' <b>Vestibulum tempor ligula vel orci consectetur, eu euismod augue bibendum. In volutpat libero velit,' +
      ' et mattis tortor placerat eget.</b> Ut nec aliquam urna, et varius massa. Praesent eu nisl ac ex maximus' +
      ' iaculis. Sed placerat, ligula vel tempor pellentesque, odio ipsum lobortis orci, sit amet fermentum ex nunc ac diam.</p>',
    partOfText:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium' +
      ' voluptatum deleniti atque corrupti quos dolores et quas. Quis autem vel eum iure...',
    views: 27,
  },
  {
    id: 'blog-3',
    imageURL: Image3,
    title: 'Benefits of telemedicine in nursing homes',
    author: 'Ilya Averkov',
    date: '22 June 2022',
    tags: ['Agriculture', 'Medical'],
    text:
      '<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis' +
      ' praesentium voluptatum deleniti atque corrupti quos dolores et quas. Nulla rhoncus' +
      ' consectetur eros non iaculis <em>“Vivamus lectus enim, convallis nec dapibus vel, semper' +
      ' id ante. Morbi pulvinar sapien nulla, eu dignissim enim ullamcorper vitae”.</em></p><p>Ut' +
      ' sit amet neque vel mauris consequat aliquam at in arcu. Ut vulputate, augue luctus dignissim' +
      ' pretium, elit magna placerat elit, at venenatis lacus arcu eget quam. Fusce nec cursus mi,' +
      ' sed <strong>blandit</strong>.</p><p>Phasellus tristique eu nisl eu consectetur. Morbi urna massa,' +
      ' imperdiet in mauris et, euismod vestibulum lacus. Integer enim elit, tincidunt aliq uam ligula id,' +
      ' lacinia auctor orci. Sed quis lobortis eros. Fusce id commodo libero. Praesent mollis velit ac' +
      ' accumsan ultrices. Ut convallis ipsum pulvinar ante maximus suscipit.</p><blockquote>“Morbi urna massa,' +
      ' imperdiet in mauris et, euismod vestibulum lacus. Integer enim elit, tincidunt aliquam ligula id,' +
      ' lacinia auctor orci. Sed quis lobortis eros. Fusce id commodo libero”</blockquote><p>Mauris purus diam,' +
      ' iaculis non leo nec, ultricies fringilla odio. Fusce feugiat elit facilisis volutpat venenatis.' +
      ' <b>Vestibulum tempor ligula vel orci consectetur, eu euismod augue bibendum. In volutpat libero velit,' +
      ' et mattis tortor placerat eget.</b> Ut nec aliquam urna, et varius massa. Praesent eu nisl ac ex maximus' +
      ' iaculis. Sed placerat, ligula vel tempor pellentesque, odio ipsum lobortis orci, sit amet fermentum ex nunc ac diam.</p>',
    partOfText:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium' +
      ' voluptatum deleniti atque corrupti quos dolores et quas. Quis autem vel eum iure...',
    views: 28,
  },
  {
    id: 'blog-4',
    imageURL: Image2,
    title: 'ISO 13485 compliance of medical devices',
    author: 'Ilya Averkov',
    date: '22 June 2022',
    tags: ['History', 'Math'],
    text:
      '<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis' +
      ' praesentium voluptatum deleniti atque corrupti quos dolores et quas. Nulla rhoncus' +
      ' consectetur eros non iaculis <em>“Vivamus lectus enim, convallis nec dapibus vel, semper' +
      ' id ante. Morbi pulvinar sapien nulla, eu dignissim enim ullamcorper vitae”.</em></p><p>Ut' +
      ' sit amet neque vel mauris consequat aliquam at in arcu. Ut vulputate, augue luctus dignissim' +
      ' pretium, elit magna placerat elit, at venenatis lacus arcu eget quam. Fusce nec cursus mi,' +
      ' sed <strong>blandit</strong>.</p><p>Phasellus tristique eu nisl eu consectetur. Morbi urna massa,' +
      ' imperdiet in mauris et, euismod vestibulum lacus. Integer enim elit, tincidunt aliq uam ligula id,' +
      ' lacinia auctor orci. Sed quis lobortis eros. Fusce id commodo libero. Praesent mollis velit ac' +
      ' accumsan ultrices. Ut convallis ipsum pulvinar ante maximus suscipit.</p><blockquote>“Morbi urna massa,' +
      ' imperdiet in mauris et, euismod vestibulum lacus. Integer enim elit, tincidunt aliquam ligula id,' +
      ' lacinia auctor orci. Sed quis lobortis eros. Fusce id commodo libero”</blockquote><p>Mauris purus diam,' +
      ' iaculis non leo nec, ultricies fringilla odio. Fusce feugiat elit facilisis volutpat venenatis.' +
      ' <b>Vestibulum tempor ligula vel orci consectetur, eu euismod augue bibendum. In volutpat libero velit,' +
      ' et mattis tortor placerat eget.</b> Ut nec aliquam urna, et varius massa. Praesent eu nisl ac ex maximus' +
      ' iaculis. Sed placerat, ligula vel tempor pellentesque, odio ipsum lobortis orci, sit amet fermentum ex nunc ac diam.</p>',
    partOfText:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium' +
      ' voluptatum deleniti atque corrupti quos dolores et quas. Quis autem vel eum iure...',
    views: 29,
  },
  {
    id: 'blog-5',
    imageURL: Image1,
    title: 'ISO 13485 compliance of medical devices',
    author: 'Ilya Averkov',
    date: '22 June 2022',
    tags: ['ISO', 'Science', 'Medical'],
    text:
      '<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis' +
      ' praesentium voluptatum deleniti atque corrupti quos dolores et quas. Nulla rhoncus' +
      ' consectetur eros non iaculis <em>“Vivamus lectus enim, convallis nec dapibus vel, semper' +
      ' id ante. Morbi pulvinar sapien nulla, eu dignissim enim ullamcorper vitae”.</em></p><p>Ut' +
      ' sit amet neque vel mauris consequat aliquam at in arcu. Ut vulputate, augue luctus dignissim' +
      ' pretium, elit magna placerat elit, at venenatis lacus arcu eget quam. Fusce nec cursus mi,' +
      ' sed <strong>blandit</strong>.</p><p>Phasellus tristique eu nisl eu consectetur. Morbi urna massa,' +
      ' imperdiet in mauris et, euismod vestibulum lacus. Integer enim elit, tincidunt aliq uam ligula id,' +
      ' lacinia auctor orci. Sed quis lobortis eros. Fusce id commodo libero. Praesent mollis velit ac' +
      ' accumsan ultrices. Ut convallis ipsum pulvinar ante maximus suscipit.</p><blockquote>“Morbi urna massa,' +
      ' imperdiet in mauris et, euismod vestibulum lacus. Integer enim elit, tincidunt aliquam ligula id,' +
      ' lacinia auctor orci. Sed quis lobortis eros. Fusce id commodo libero”</blockquote><p>Mauris purus diam,' +
      ' iaculis non leo nec, ultricies fringilla odio. Fusce feugiat elit facilisis volutpat venenatis.' +
      ' <b>Vestibulum tempor ligula vel orci consectetur, eu euismod augue bibendum. In volutpat libero velit,' +
      ' et mattis tortor placerat eget.</b> Ut nec aliquam urna, et varius massa. Praesent eu nisl ac ex maximus' +
      ' iaculis. Sed placerat, ligula vel tempor pellentesque, odio ipsum lobortis orci, sit amet fermentum ex nunc ac diam.</p>',
    partOfText:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium' +
      ' voluptatum deleniti atque corrupti quos dolores et quas. Quis autem vel eum iure...',
    views: 30,
  },
  {
    id: 'blog-6',
    imageURL: Image1,
    title: 'ISO 13485 compliance of medical devices',
    author: 'Ilya Averkov',
    date: '22 June 2022',
    tags: ['ISO', 'Science', 'Medical'],
    text:
      '<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis' +
      ' praesentium voluptatum deleniti atque corrupti quos dolores et quas. Nulla rhoncus' +
      ' consectetur eros non iaculis <em>“Vivamus lectus enim, convallis nec dapibus vel, semper' +
      ' id ante. Morbi pulvinar sapien nulla, eu dignissim enim ullamcorper vitae”.</em></p><p>Ut' +
      ' sit amet neque vel mauris consequat aliquam at in arcu. Ut vulputate, augue luctus dignissim' +
      ' pretium, elit magna placerat elit, at venenatis lacus arcu eget quam. Fusce nec cursus mi,' +
      ' sed <strong>blandit</strong>.</p><p>Phasellus tristique eu nisl eu consectetur. Morbi urna massa,' +
      ' imperdiet in mauris et, euismod vestibulum lacus. Integer enim elit, tincidunt aliq uam ligula id,' +
      ' lacinia auctor orci. Sed quis lobortis eros. Fusce id commodo libero. Praesent mollis velit ac' +
      ' accumsan ultrices. Ut convallis ipsum pulvinar ante maximus suscipit.</p><blockquote>“Morbi urna massa,' +
      ' imperdiet in mauris et, euismod vestibulum lacus. Integer enim elit, tincidunt aliquam ligula id,' +
      ' lacinia auctor orci. Sed quis lobortis eros. Fusce id commodo libero”</blockquote><p>Mauris purus diam,' +
      ' iaculis non leo nec, ultricies fringilla odio. Fusce feugiat elit facilisis volutpat venenatis.' +
      ' <b>Vestibulum tempor ligula vel orci consectetur, eu euismod augue bibendum. In volutpat libero velit,' +
      ' et mattis tortor placerat eget.</b> Ut nec aliquam urna, et varius massa. Praesent eu nisl ac ex maximus' +
      ' iaculis. Sed placerat, ligula vel tempor pellentesque, odio ipsum lobortis orci, sit amet fermentum ex nunc ac diam.</p>',
    partOfText:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium' +
      ' voluptatum deleniti atque corrupti quos dolores et quas. Quis autem vel eum iure...',
    views: 31,
  },
  {
    id: 'blog-7',
    imageURL: Image1,
    title: 'ISO 13485 compliance of medical devices',
    author: 'Ilya Averkov',
    date: '22 June 2022',
    tags: ['ISO', 'Science', 'Medical'],
    text:
      '<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis' +
      ' praesentium voluptatum deleniti atque corrupti quos dolores et quas. Nulla rhoncus' +
      ' consectetur eros non iaculis <em>“Vivamus lectus enim, convallis nec dapibus vel, semper' +
      ' id ante. Morbi pulvinar sapien nulla, eu dignissim enim ullamcorper vitae”.</em></p><p>Ut' +
      ' sit amet neque vel mauris consequat aliquam at in arcu. Ut vulputate, augue luctus dignissim' +
      ' pretium, elit magna placerat elit, at venenatis lacus arcu eget quam. Fusce nec cursus mi,' +
      ' sed <strong>blandit</strong>.</p><p>Phasellus tristique eu nisl eu consectetur. Morbi urna massa,' +
      ' imperdiet in mauris et, euismod vestibulum lacus. Integer enim elit, tincidunt aliq uam ligula id,' +
      ' lacinia auctor orci. Sed quis lobortis eros. Fusce id commodo libero. Praesent mollis velit ac' +
      ' accumsan ultrices. Ut convallis ipsum pulvinar ante maximus suscipit.</p><blockquote>“Morbi urna massa,' +
      ' imperdiet in mauris et, euismod vestibulum lacus. Integer enim elit, tincidunt aliquam ligula id,' +
      ' lacinia auctor orci. Sed quis lobortis eros. Fusce id commodo libero”</blockquote><p>Mauris purus diam,' +
      ' iaculis non leo nec, ultricies fringilla odio. Fusce feugiat elit facilisis volutpat venenatis.' +
      ' <b>Vestibulum tempor ligula vel orci consectetur, eu euismod augue bibendum. In volutpat libero velit,' +
      ' et mattis tortor placerat eget.</b> Ut nec aliquam urna, et varius massa. Praesent eu nisl ac ex maximus' +
      ' iaculis. Sed placerat, ligula vel tempor pellentesque, odio ipsum lobortis orci, sit amet fermentum ex nunc ac diam.</p>',
    partOfText:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium' +
      ' voluptatum deleniti atque corrupti quos dolores et quas. Quis autem vel eum iure...',
    views: 32,
  },
  {
    id: 'blog-8',
    imageURL: Image3,
    title: 'ISO 13485 compliance of medical devices',
    author: 'Ilya Averkov',
    date: '22 June 2022',
    tags: ['ISO', 'Science', 'Medical'],
    text:
      '<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis' +
      ' praesentium voluptatum deleniti atque corrupti quos dolores et quas. Nulla rhoncus' +
      ' consectetur eros non iaculis <em>“Vivamus lectus enim, convallis nec dapibus vel, semper' +
      ' id ante. Morbi pulvinar sapien nulla, eu dignissim enim ullamcorper vitae”.</em></p><p>Ut' +
      ' sit amet neque vel mauris consequat aliquam at in arcu. Ut vulputate, augue luctus dignissim' +
      ' pretium, elit magna placerat elit, at venenatis lacus arcu eget quam. Fusce nec cursus mi,' +
      ' sed <strong>blandit</strong>.</p><p>Phasellus tristique eu nisl eu consectetur. Morbi urna massa,' +
      ' imperdiet in mauris et, euismod vestibulum lacus. Integer enim elit, tincidunt aliq uam ligula id,' +
      ' lacinia auctor orci. Sed quis lobortis eros. Fusce id commodo libero. Praesent mollis velit ac' +
      ' accumsan ultrices. Ut convallis ipsum pulvinar ante maximus suscipit.</p><blockquote>“Morbi urna massa,' +
      ' imperdiet in mauris et, euismod vestibulum lacus. Integer enim elit, tincidunt aliquam ligula id,' +
      ' lacinia auctor orci. Sed quis lobortis eros. Fusce id commodo libero”</blockquote><p>Mauris purus diam,' +
      ' iaculis non leo nec, ultricies fringilla odio. Fusce feugiat elit facilisis volutpat venenatis.' +
      ' <b>Vestibulum tempor ligula vel orci consectetur, eu euismod augue bibendum. In volutpat libero velit,' +
      ' et mattis tortor placerat eget.</b> Ut nec aliquam urna, et varius massa. Praesent eu nisl ac ex maximus' +
      ' iaculis. Sed placerat, ligula vel tempor pellentesque, odio ipsum lobortis orci, sit amet fermentum ex nunc ac diam.</p>',
    partOfText:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium' +
      ' voluptatum deleniti atque corrupti quos dolores et quas. Quis autem vel eum iure...',
    views: 33,
  },
  {
    id: 'blog-9',
    imageURL: Image2,
    title: 'ISO 13485 compliance of medical devices',
    author: 'Ilya Averkov',
    date: '22 June 2022',
    tags: ['ISO', 'Science', 'Medical'],
    text:
      '<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis' +
      ' praesentium voluptatum deleniti atque corrupti quos dolores et quas. Nulla rhoncus' +
      ' consectetur eros non iaculis <em>“Vivamus lectus enim, convallis nec dapibus vel, semper' +
      ' id ante. Morbi pulvinar sapien nulla, eu dignissim enim ullamcorper vitae”.</em></p><p>Ut' +
      ' sit amet neque vel mauris consequat aliquam at in arcu. Ut vulputate, augue luctus dignissim' +
      ' pretium, elit magna placerat elit, at venenatis lacus arcu eget quam. Fusce nec cursus mi,' +
      ' sed <strong>blandit</strong>.</p><p>Phasellus tristique eu nisl eu consectetur. Morbi urna massa,' +
      ' imperdiet in mauris et, euismod vestibulum lacus. Integer enim elit, tincidunt aliq uam ligula id,' +
      ' lacinia auctor orci. Sed quis lobortis eros. Fusce id commodo libero. Praesent mollis velit ac' +
      ' accumsan ultrices. Ut convallis ipsum pulvinar ante maximus suscipit.</p><blockquote>“Morbi urna massa,' +
      ' imperdiet in mauris et, euismod vestibulum lacus. Integer enim elit, tincidunt aliquam ligula id,' +
      ' lacinia auctor orci. Sed quis lobortis eros. Fusce id commodo libero”</blockquote><p>Mauris purus diam,' +
      ' iaculis non leo nec, ultricies fringilla odio. Fusce feugiat elit facilisis volutpat venenatis.' +
      ' <b>Vestibulum tempor ligula vel orci consectetur, eu euismod augue bibendum. In volutpat libero velit,' +
      ' et mattis tortor placerat eget.</b> Ut nec aliquam urna, et varius massa. Praesent eu nisl ac ex maximus' +
      ' iaculis. Sed placerat, ligula vel tempor pellentesque, odio ipsum lobortis orci, sit amet fermentum ex nunc ac diam.</p>',
    partOfText:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium' +
      ' voluptatum deleniti atque corrupti quos dolores et quas. Quis autem vel eum iure...',
    views: 34,
  },
  {
    id: 'blog-10',
    imageURL: Image1,
    title: 'ISO 13485 compliance of medical devices',
    author: 'Ilya Averkov',
    date: '22 June 2022',
    tags: ['ISO', 'Science', 'Medical'],
    text:
      '<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis' +
      ' praesentium voluptatum deleniti atque corrupti quos dolores et quas. Nulla rhoncus' +
      ' consectetur eros non iaculis <em>“Vivamus lectus enim, convallis nec dapibus vel, semper' +
      ' id ante. Morbi pulvinar sapien nulla, eu dignissim enim ullamcorper vitae”.</em></p><p>Ut' +
      ' sit amet neque vel mauris consequat aliquam at in arcu. Ut vulputate, augue luctus dignissim' +
      ' pretium, elit magna placerat elit, at venenatis lacus arcu eget quam. Fusce nec cursus mi,' +
      ' sed <strong>blandit</strong>.</p><p>Phasellus tristique eu nisl eu consectetur. Morbi urna massa,' +
      ' imperdiet in mauris et, euismod vestibulum lacus. Integer enim elit, tincidunt aliq uam ligula id,' +
      ' lacinia auctor orci. Sed quis lobortis eros. Fusce id commodo libero. Praesent mollis velit ac' +
      ' accumsan ultrices. Ut convallis ipsum pulvinar ante maximus suscipit.</p><blockquote>“Morbi urna massa,' +
      ' imperdiet in mauris et, euismod vestibulum lacus. Integer enim elit, tincidunt aliquam ligula id,' +
      ' lacinia auctor orci. Sed quis lobortis eros. Fusce id commodo libero”</blockquote><p>Mauris purus diam,' +
      ' iaculis non leo nec, ultricies fringilla odio. Fusce feugiat elit facilisis volutpat venenatis.' +
      ' <b>Vestibulum tempor ligula vel orci consectetur, eu euismod augue bibendum. In volutpat libero velit,' +
      ' et mattis tortor placerat eget.</b> Ut nec aliquam urna, et varius massa. Praesent eu nisl ac ex maximus' +
      ' iaculis. Sed placerat, ligula vel tempor pellentesque, odio ipsum lobortis orci, sit amet fermentum ex nunc ac diam.</p>',
    partOfText:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium' +
      ' voluptatum deleniti atque corrupti quos dolores et quas. Quis autem vel eum iure...',
    views: 36,
  },
  {
    id: 'blog-11',
    imageURL: Image2,
    title: 'ISO 13485 compliance of medical devices',
    author: 'Ilya Averkov',
    date: '22 June 2022',
    tags: ['ISO', 'Science', 'Medical'],
    text:
      '<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis' +
      ' praesentium voluptatum deleniti atque corrupti quos dolores et quas. Nulla rhoncus' +
      ' consectetur eros non iaculis <em>“Vivamus lectus enim, convallis nec dapibus vel, semper' +
      ' id ante. Morbi pulvinar sapien nulla, eu dignissim enim ullamcorper vitae”.</em></p><p>Ut' +
      ' sit amet neque vel mauris consequat aliquam at in arcu. Ut vulputate, augue luctus dignissim' +
      ' pretium, elit magna placerat elit, at venenatis lacus arcu eget quam. Fusce nec cursus mi,' +
      ' sed <strong>blandit</strong>.</p><p>Phasellus tristique eu nisl eu consectetur. Morbi urna massa,' +
      ' imperdiet in mauris et, euismod vestibulum lacus. Integer enim elit, tincidunt aliq uam ligula id,' +
      ' lacinia auctor orci. Sed quis lobortis eros. Fusce id commodo libero. Praesent mollis velit ac' +
      ' accumsan ultrices. Ut convallis ipsum pulvinar ante maximus suscipit.</p><blockquote>“Morbi urna massa,' +
      ' imperdiet in mauris et, euismod vestibulum lacus. Integer enim elit, tincidunt aliquam ligula id,' +
      ' lacinia auctor orci. Sed quis lobortis eros. Fusce id commodo libero”</blockquote><p>Mauris purus diam,' +
      ' iaculis non leo nec, ultricies fringilla odio. Fusce feugiat elit facilisis volutpat venenatis.' +
      ' <b>Vestibulum tempor ligula vel orci consectetur, eu euismod augue bibendum. In volutpat libero velit,' +
      ' et mattis tortor placerat eget.</b> Ut nec aliquam urna, et varius massa. Praesent eu nisl ac ex maximus' +
      ' iaculis. Sed placerat, ligula vel tempor pellentesque, odio ipsum lobortis orci, sit amet fermentum ex nunc ac diam.</p>',
    partOfText:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium' +
      ' voluptatum deleniti atque corrupti quos dolores et quas. Quis autem vel eum iure...',
    views: 36,
  },
  {
    id: 'blog-12',
    imageURL: Image3,
    title: 'ISO 13485 compliance of medical devices',
    author: 'Ilya Averkov',
    date: '22 June 2022',
    tags: ['ISO', 'Science', 'Medical'],
    text:
      '<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis' +
      ' praesentium voluptatum deleniti atque corrupti quos dolores et quas. Nulla rhoncus' +
      ' consectetur eros non iaculis <em>“Vivamus lectus enim, convallis nec dapibus vel, semper' +
      ' id ante. Morbi pulvinar sapien nulla, eu dignissim enim ullamcorper vitae”.</em></p><p>Ut' +
      ' sit amet neque vel mauris consequat aliquam at in arcu. Ut vulputate, augue luctus dignissim' +
      ' pretium, elit magna placerat elit, at venenatis lacus arcu eget quam. Fusce nec cursus mi,' +
      ' sed <strong>blandit</strong>.</p><p>Phasellus tristique eu nisl eu consectetur. Morbi urna massa,' +
      ' imperdiet in mauris et, euismod vestibulum lacus. Integer enim elit, tincidunt aliq uam ligula id,' +
      ' lacinia auctor orci. Sed quis lobortis eros. Fusce id commodo libero. Praesent mollis velit ac' +
      ' accumsan ultrices. Ut convallis ipsum pulvinar ante maximus suscipit.</p><blockquote>“Morbi urna massa,' +
      ' imperdiet in mauris et, euismod vestibulum lacus. Integer enim elit, tincidunt aliquam ligula id,' +
      ' lacinia auctor orci. Sed quis lobortis eros. Fusce id commodo libero”</blockquote><p>Mauris purus diam,' +
      ' iaculis non leo nec, ultricies fringilla odio. Fusce feugiat elit facilisis volutpat venenatis.' +
      ' <b>Vestibulum tempor ligula vel orci consectetur, eu euismod augue bibendum. In volutpat libero velit,' +
      ' et mattis tortor placerat eget.</b> Ut nec aliquam urna, et varius massa. Praesent eu nisl ac ex maximus' +
      ' iaculis. Sed placerat, ligula vel tempor pellentesque, odio ipsum lobortis orci, sit amet fermentum ex nunc ac diam.</p>',
    partOfText:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium' +
      ' voluptatum deleniti atque corrupti quos dolores et quas. Quis autem vel eum iure...',
    views: 37,
  },
];
