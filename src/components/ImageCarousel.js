import React, { Component } from 'react';
import _ from 'lodash';
import config, { numToCategory, categoryImage, imgUrl, imgUrls } from '../config';
import { Carousel, CarouselItem } from 'react-bootstrap';

class ImageCarousel extends Component {
	render() {
		const item = this.props.item;
		const urlArray = imgUrls(item);
		if (urlArray.length > 0) {
			return <Carousel interval={2000} pauseOnHover={false}>
					{_.map(urlArray, (url)=>{
						return <CarouselItem key={url}>
							<img width={242} height={200} alt="242x200" src={url}/>
						</CarouselItem>;
						<Carousel.Caption>
			        <h3>Second slide label</h3>
			        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
			      </Carousel.Caption>
					})}
				</Carousel>;
		} else {		
			return <Carousel>
				<CarouselItem>
					<img width={242} height={200}
						src={imgUrl(item) || categoryImage(config.categories[numToCategory(item.category)])} />
				</CarouselItem>
				<Carousel.Caption>
	        <h3>Second slide label</h3>
	        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
			</Carousel>;
		}
	}
}

export default ImageCarousel;