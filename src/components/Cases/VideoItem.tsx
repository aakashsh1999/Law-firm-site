import Image from "next/image";

interface VideoItemProps {
  video: {
    thumbnail: string;
    youtubeId: string;
  };
  index: number;
}

export default function VideoItem({ video, index }: VideoItemProps) {
  return (
    <div
      id={`video-${index + 1}`}
      data-index={index}
      className="cases__video-item"
    >
      <a
        href="#"
        className="cases__video-lightbox w-inline-block w-lightbox local"
        aria-label="open lightbox"
        aria-haspopup="dialog"
      >
        <Image
          src={video.thumbnail || "/placeholder.svg"}
          alt="Our Notable Verdicts & Settlements"
          width={1280}
          height={720}
          className="picture-item"
        />
        <div className="cases__video-button">
          <Image
            src="https://cdn.prod.website-files.com/63a4a6b4b1600866f3190000/6448ec3618b136743affe07e_Polygon%201.svg"
            alt="Play button"
            width={24}
            height={24}
            className="cases__video-icon"
          />
        </div>
        <script type="application/json" className="w-json">{`
          {
            "items": [
              {
                "url": "https://www.youtube.com/watch?v=${video.youtubeId}",
                "originalUrl": "https://www.youtube.com/watch?v=${video.youtubeId}",
                "width": 940,
                "height": 528,
                "thumbnailUrl": "https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg",
                "html": "<iframe class=\\"embedly-embed\\" src=\\"//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2F${video.youtubeId}%3Ffeature%3Doembed&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D${video.youtubeId}&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2F${video.youtubeId}%2Fhqdefault.jpg&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=youtube\\" width=\\"940\\" height=\\"528\\" scrolling=\\"no\\" title=\\"YouTube embed\\" frameborder=\\"0\\" allow=\\"autoplay; fullscreen\\" allowfullscreen=\\"true\\"></iframe>",
                "type": "video"
              }
            ],
            "group": "Success Stories"
          }
        `}</script>
      </a>
    </div>
  );
}
