import React, { Component } from 'react';
import _ from 'lodash';
import config, { numToCategory, categoryImage, imgUrl, imgUrls, imgRawUrls } from '../config';
import Carousel from 'nuka-carousel';

const ImageCarousel = React.createClass({
	mixins: [Carousel.ControllerMixin],
	render: function() {
		const item = this.props.item;
		const urlArray = imgUrls(item);

		var Decorators = [{
		  component: React.createClass({
		    render() {
	      	const currentSlide = this.props.currentSlide;
	      	if (currentSlide !== 0) {
			      return <div className="btn btn-default btn-circle" onClick={this.props.previousSlide}>
			        	<span style={{color: 'black'}} className="glyphicon glyphicon-chevron-left"/>
			        </div>
			    } else {
		      	return <div/>
			    }
		    }
		  }),
		  position: 'CenterLeft',
		  style: {
		    padding: 10
		  }
		},
		{
		  component: React.createClass({
		    render() {
	      	const currentSlide = this.props.currentSlide;
	      	if (currentSlide < item.image.length - 1) {
		        return <div className="btn btn-default btn-circle" onClick={this.props.nextSlide}>
		        	<span style={{color: 'black'}} className="glyphicon glyphicon-chevron-right"/>
		        </div>
		      } else {
		      	return <div/>
		      }
		    }
		  }),
		  position: 'CenterRight',
		  style: {
		    padding: 10
		  }
		},
		{
		  component: React.createClass({
		    render() {
	      	const currentSlide = this.props.currentSlide;
	      	if (currentSlide < item.image.length) {
			      return (
				        <div className="btn btn-default btn-circle" onClick={()=>(
				        	window.open(config.backendURL + '/api/images/' + item.image[this.props.currentSlide])
				        )}>
				        	<span style={{color: 'black'}} className="glyphicon glyphicon-fullscreen"/>
				        </div>
			      )
			    } else {
			    	return <div/>;
			    }
		    }
		  }),
		  position: 'BottomRight',
		  style: {
		    padding: 10
		  }
		}];

		var carouselContent;

		if (urlArray.length > 0) {
			carouselContent = _.map(urlArray, (url)=>{
				return <div key={url}>
					<img src={url}/>
				</div>;
			});
		} else {
			carouselContent = <img width={242} height={200}
				src={imgUrl(item) || categoryImage(config.categories[numToCategory(item.category)])} />;
		}

    return (
    	<div style={{width: '242px', backgroundColor: 'white'}}>
	    	<Carousel item={item} decorators={Decorators} cellAlign="center">
	          {carouselContent}
		    </Carousel>
	    </div>
    );
	}
});

export default ImageCarousel;