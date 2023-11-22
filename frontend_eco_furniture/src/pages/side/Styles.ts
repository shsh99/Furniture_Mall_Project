import styled, { keyframes } from "styled-components";

const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(60px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Container = styled.div`
	height: 100%;
`;

export const Content = styled.div`
	height: 100%;
	display: flex;
`;

export const ClosedSideBar = styled.header`
	max-width: 60px;
	width: 100%;
	height: 100%;
	border-radius: 0 12px 12px 0;
 
    background-color: var(--second-background);
	background: var(--second-background);

	position: fixed;
	left: 0;
	top: 0;
	z-index: 100;

	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: space-between;

	svg {
		position: absolute;
  		top:35px;
  		left:25px;
		
	}

	ul li {
		cursor: pointer;
	}

	/* Links principais do app */
	nav {
		display: flex;
		align-items: center;
		flex-direction: column;
		width: 100%;

		> button {  
            background-color: rgba(47, 47, 47, 0); 
            margin-top: 100%;
            margin-left: 100%;
            border: none;
          
			&:hover {
                
				svg {
					path {
						background-color: rgba(47, 47, 47, 0); 
					}
				}
			}
		}

		> button svg {
			width: 33px;
			height: 33px;
			color: #002;
			position: absolute;
			
		}

		> img {
			width: 36px;
			height: 36px;
			border-radius: 0%;
			margin-top: 16px;
		}

		ul {
			margin-top: 64px;
			width: 100%;
			text-align: center;
			display: flex;
			align-items: center;
			flex-direction: column;

			a {
                color: #2f2f2f;
				width: 100%;
				padding: 16px 0;
				border-radius: 8px 0 0 8px;

				display: flex;
				align-items: center;
				justify-content: center;

				transition: background 0.3s;

				&:hover {
					background: var(--primary-background);

					svg {
						path {
							color: var(--third-color);
						}
					}
				}
				svg {
                    color: #2f2f2f;
					width: 20px;
					height: 20px;
				}
			}
		}
	}

	/* Icones que pode não ser tão principais no app */
	div {
		display: flex;
		align-items: center;
		flex-direction: column;
		width: 100%;

		ul {
			margin-bottom: 16px;
			text-align: center;
			width: 100%;
			display: flex;
			align-items: center;
			flex-direction: column;

			a {
                font-weight: bold;
                color: #2f2f2f;
				padding: 16px 0;
				width: 100%;
				display: flex;
				align-items: center;
				justify-content: center;

				transition: color 0.3s;
				&:hover {
					svg path {
						color: var(--third-color);
					}
				}
				svg {
                    color: #2f2f2f;
					width: 20px;
					height: 20px;
				}
			}
		}

		span {
			padding: 16px 0;
			text-align: center;
			border-radius: 8px 8px 0 0;

			display: flex;
			align-items: center;
			justify-content: center;

			background: var(--third-color);
			width: 100%;
			img {
				width: 32px;
				height: 32px;
				
			}
		}
	}
`;

export const OpenSideBar = styled.header`

	height: 100%;
	width: 100%;
	position: fixed;
	left: 0;
	top: 0;
	z-index: 100;
	background-color: rgba(47, 47, 47, 0.3); 
	display: flex;
	align-items: center;

	svg {
		color: #f9f9f9;
	}

	section {
        
        background-color: #ffffff;
		display: flex;
		align-items: flex-start;
		flex-direction: column;
		justify-content: space-between;

		max-width: 240px;
		height: 100%;

		
		border-radius: 0 12px 12px 0;

		ul li {
            
            
			cursor: pointer;
		}

		a sub-side {
			margin-top: -30px;
			padding-left: -50px;
			text-align: left;
		}

		/* Links principais do app */
		nav {
            
			display: flex;
			align-items: center;
			flex-direction: column;
			width: 100%;

			width: 100%;

			> span {
                float: right;
                text-align: right;
				width: 100%;
				
				align-items: flex-start;
                
				button {
					cursor: pointer;
                    background-color: rgba(47, 47, 47, 0); 
                    
                    border: none;
                  
					&:hover {
						svg path {
							color: var(--third-color);
						}
					}

					svg {
						width: 30px;
						height: 30px;

						color: #c4c4c4;
					}
				}
			}

			div {
                
               
                color: #2f2f2f;
				margin-top: 16px;

				display: flex;
				align-items: center;
				justify-content: flex-start;
				padding-left: 24px;
				flex-direction: row;
				gap: 16px;
                text-align: center;

				img {
					width: 170px;
					height: 100px;
					
				}
                 
			
			}
           
             h1 {
                    font-weight: bold;
					color: #2f2f2f;
					font-size: 30px;
                    padding: 10px;
                    text-align: left;
					animation: ${appearFromRight} 0.4s;
				}
           

			ul {
                
                
                color: #2f2f2f;
				margin-top: 64px;
				width: 100%;
				text-align: left;
				display: flex;
				flex-direction: column;

				a {
                    text-decoration: none;
                    font-weight: bold;
					color: #2f2f2f;
					padding: 16px 20px;
					border-radius: 8px 0 0 8px;

					display: flex;
					align-items: center;
					gap: 16px;

					transition: background 0.3s;

					&:hover {
						background: var(--shadow-black-color);

						svg path {
                            
							color: var(--third-color);
						}
					}

					p {
                        font-weight: bold;
                        color: #2f2f2f;
						animation: ${appearFromRight} 0.4s;
					}

					svg {
                        
						width: 20px;
						height: 20px;
					}
				}
			}
		}

		/* Icones que pode não ser tão principais no app */
		div {
            
            color: #2f2f2f;
			display: flex;
			align-items: center;
			flex-direction: column;
			width: 100%;

			ul {
                
                color: #2f2f2f;
				margin-bottom: 16px;
				text-align: left;
				width: 100%;
				display: flex;
				flex-direction: column;

				a {
                    text-decoration: none;
                    font-weight: bold;
                    color: #2f2f2f;
					padding: 16px 20px;
					display: flex;
					align-items: center;
					color: #c4c4c4;
					gap: 16px;

					transition: color 0.3s;
					&:hover {
						svg path {
                            
							color: var(--third-color);
						}
					}
					svg {
                        color: #2f2f2f;
						width: 20px;
						height: 20px;
					}

					p {
                        color: #2f2f2f;
						animation: ${appearFromRight} 0.4s;
					}
				}
			}

			span {
				padding: 16px 0;
				border-radius: 8px 8px 0 0;

				background: var(--third-color);
				width: 100%;

				display: flex;
				align-items: center;
				gap: 12px;

				p {
                    
					text-overflow: ellipsis;
					color: #ffffff;
					width: 70%;
					padding-right: 12px;
					white-space: nowrap;
					animation: ${appearFromRight} 0.4s;
					overflow: hidden;
				}

				img {
                    
					margin-left: 20px;
					width: 170px;
					height: 100px;
					border-radius: 5%;
				}
			}
		}
	}

	aside {
		width: 100%;
		height: 100%;
	}
    .menu-trigger.type12:after {
  position : absolute;
  top : 50%;
  left : 50%;
  display : block;
  content : '';
  width : 84px;
  height : 84px;
  margin : -45px 0 0 -45px;
  border-radius : 50%;
  border : 4px solid transparent;
  transition : all .75s;
}
.menu-trigger.active-12 span:nth-of-type(1) {
  -webkit-transform : translateY(20px) rotate(-45deg);
  transform : translateY(20px) rotate(-45deg);
}
.menu-trigger.active-12 span:nth-of-type(2) {
  left : 60%;
  opacity : 0;
  -webkit-animation : active-menu-bar12-01 .8s forwards;
  animation : active-menu-bar12-01 .8s forwards;
}
@-webkit-keyframes active-menu-bar12-01 {
  100% {
    height : 0;
  }
}
@keyframes active-menu-bar12-01 {
  100% {
    height : 0;
  }
}
.menu-trigger.active-12 span:nth-of-type(3) {
  -webkit-transform : translateY(-20px) rotate(45deg);
  transform : translateY(-20px) rotate(45deg);
}
.menu-trigger.active-12:after {
  -webkit-animation : circle-12 .4s .25s forwards;
  animation : circle-12 .4s .25s forwards;
}
@-webkit-keyframes circle-12 {
  0% {
    border-color : transparent;
    -webkit-transform : rotate(0deg);
  }
  25% {
    border-color : transparent #fff transparent transparent;
  }
  50% {
    border-color : transparent #fff #fff transparent;
  }
  75% {
    border-color : transparent #fff #fff #fff;
  }
  100% {
    border-color : #fff;
    -webkit-transform : rotate(-680deg);
  }
}
@keyframes circle-12 {
  0% {
    border-color : transparent;
    transform : rotate (0deg);
  }
  25% {
    border-color : transparent #fff transparent transparent;
  }
  50% {
    border-color : transparent #fff #fff transparent;
  }
  75% {
    border-color : transparent #fff #fff #fff;
  }
  100% {
    border-color : #fff;
    transform : rotate (-680deg);
  }
}
`;
